import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../../../shared/components/ui/confirm-dialog/confirm-dialog.component';
import { Pagination } from '../../../../interfaces/pagination';
import { UiService } from '../../../../services/ui.service';
import { ReloadService } from '../../../../services/reload.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { EMPTY, Subscription } from 'rxjs';
import { UtilsService } from '../../../../services/utils.service';
import { ActivatedRoute, Router } from '@angular/router';
import * as XLSX from 'xlsx';
import { DownloadJsonDialogComponent } from '../../../../shared/dialog-view/download-json-dialog/download-json-dialog.component';
import { NgForm } from '@angular/forms';
import { debounceTime, distinctUntilChanged, pluck, switchMap } from 'rxjs/operators';
import { ProductUnitType } from '../../../../interfaces/product-unit-type';
import { UnitTypeService } from '../../../../services/unit-type.service';

@Component({
  selector: 'app-unit-types',
  templateUrl: './unit-types.component.html',
  styleUrls: ['./unit-types.component.scss']
})
export class UnitTypesComponent implements OnInit, AfterViewInit, OnDestroy {
  // Subscriptions
  private subAcRoute: Subscription;
  private subForm: Subscription;

  unitTypes: ProductUnitType[] = [];
  holdPrevData: ProductUnitType[] = [];


  // DOWNLOADABLE
  dataTypeFormat = 'excel';

  // Pagination
  currentPage = 1;
  totalProducts = 0;
  productsPerPage = 24;
  totalProductsStore = 0;

  // SEARCH AREA
  searchProducts: ProductUnitType[] = [];
  isLoading = false;
  isSelect = false;
  searchQuery = null;
  @ViewChild('searchForm') searchForm: NgForm;
  @ViewChild('searchInput') searchInput: ElementRef;

  constructor(
    private dialog: MatDialog,
    private unitTypeService: UnitTypeService,
    private uiService: UiService,
    private reloadService: ReloadService,
    private spinner: NgxSpinnerService,
    private utilsService: UtilsService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.reloadService.refreshTags$
      .subscribe(() => {
        this.getAllUnitTypes();
      });

    // GET PAGE FROM QUERY PARAM
    this.subAcRoute = this.activatedRoute.queryParams.subscribe(qParam => {
      if (qParam && qParam.page) {
        this.currentPage = qParam.page;
      } else {
        this.currentPage = 1;
      }
      this.getAllUnitTypes();
    });
  }

  ngAfterViewInit(): void {
    const formValue = this.searchForm.valueChanges;

    this.subForm = formValue.pipe(
      pluck('searchTerm'),
      debounceTime(200),
      distinctUntilChanged(),
      switchMap(data => {
        this.searchQuery = data;
        if (this.searchQuery === '' || this.searchQuery === null || !this.searchQuery.trim()) {
          this.searchProducts = [];
          this.unitTypes = this.holdPrevData;
          this.totalProducts = this.totalProductsStore;
          this.searchProducts = [];
          this.searchQuery = null;
          return EMPTY;
        }
        this.isLoading = true;
        const pagination: Pagination = {
          pageSize: this.productsPerPage.toString(),
          currentPage: this.currentPage.toString()
        };
        return this.unitTypeService.getSearchUnitType(data, pagination);
      })
    )
      .subscribe(res => {
        this.isLoading = false;
        this.searchProducts = res.data;
        this.unitTypes = this.searchProducts;
        this.totalProducts = res.count;
        this.currentPage = 1;
        this.router.navigate([], { queryParams: { page: this.currentPage } });
      }, error => {
        this.isLoading = false;
      });
  }

  /**
   * COMPONENT DIALOG VIEW
   */
  public openConfirmDialog(data?: string) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: '400px',
      data: {
        title: 'Confirm Delete',
        message: 'Are you sure you want delete this category?'
      }
    });
    dialogRef.afterClosed().subscribe(dialogResult => {
      if (dialogResult) {
        console.log('Data should be deleted');
        this.deleteTag(data);
      }
    });
  }

  public openConfirmUploadDialog(data: ProductUnitType[]) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: '400px',
      data: {
        title: 'Import Data!',
        message: 'Warning! Please check excel format for final import'
      }
    });
    dialogRef.afterClosed().subscribe(dialogResult => {
      if (dialogResult) {
        this.insertManyUnitType(data);
      }
    });
  }

  /**
   * HTTP REQ HANDLE
   */

  private getAllUnitTypes() {
    this.spinner.show();

    const pagination: Pagination = {
      pageSize: this.productsPerPage.toString(),
      currentPage: this.currentPage.toString()
    };
    this.unitTypeService.getAllUnitTypes(pagination)
      .subscribe(res => {
        this.unitTypes = res.data;
        console.log("Unit:", this.unitTypes)
        this.totalProducts = res.count;
        this.holdPrevData = res.data;
        this.totalProductsStore = res.count;
        this.spinner.hide();
      }, error => {
        this.spinner.hide();
        console.log(error);
      });
  }

  private insertManyUnitType(data: ProductUnitType[]) {
    this.spinner.show();
    this.unitTypeService.insertManyUnitType(data)
      .subscribe(res => {
        this.uiService.success(res.message);
        this.reloadService.needRefreshTags$();
        this.spinner.hide();
      }, error => {
        console.log(error);
        this.spinner.hide();
      });
  }

  /**
   * DELETE METHOD HERE
   */
  private deleteTag(id: string) {
    this.spinner.show();
    this.unitTypeService.deleteUnitType(id)
      .subscribe(res => {
        this.uiService.success(res.message);
        this.reloadService.needRefreshTags$();
        this.spinner.hide();
      }, error => {
        console.log(error);
        this.spinner.hide();
      });
  }


  /**
   * PAGINATION CHANGE
   */
  public onPageChanged(event: any) {
    this.router.navigate([], { queryParams: { page: event } });
  }


  /**
   * IMPORT EXCEL DATA
   * FILE CHANGE EVENT
   */

  onFileChange(ev) {
    let workBook = null;
    let jsonData = null;
    const reader = new FileReader();
    const file = ev.target.files[0];
    if (this.dataTypeFormat === 'excel') {
      reader.onload = (event) => {
        const data = reader.result;
        workBook = XLSX.read(data, { type: 'binary' });
        jsonData = workBook.SheetNames.reduce((initial, name) => {
          const sheet = workBook.Sheets[name];
          initial[name] = XLSX.utils.sheet_to_json(sheet);
          return initial;
        }, {});
        // const dataString = JSON.stringify(jsonData) as any;

        // Modify Attributes
        const unitTypes = jsonData.unitTypes;
        const mTags: ProductUnitType[] = unitTypes.map(m => {
          const unitTypeNameString = m.name.toString().trim();
          return {
            ...m,
            // ...{unitTypeSlug: this.utilsService.transformToSlug(unitTypeNameString)},
          } as ProductUnitType;
        });
        this.openConfirmUploadDialog(mTags);
      };
      reader.readAsBinaryString(file);
    } else {
      reader.readAsText(file, 'UTF-8');
      reader.onload = () => {
        const unitTypes = JSON.parse(reader.result.toString());
        const mTags: ProductUnitType[] = unitTypes.map(m => {
          return {
            _id: m._id ? m._id : null,
            name: m.unitTypeName,
            unitQuantity: m.unitQuantity,
            unitValue: m.unitValue,
          } as ProductUnitType;
        });
        this.openConfirmUploadDialog(mTags);
      };
      reader.onerror = (error) => {
        console.log(error);
      };
    }
  }


  exportDataToFile() {
    if (this.dataTypeFormat === 'json') {
      this.exportAsAJson();
    } else {
      this.exportToExcel();
    }
  }


  /**
   * EXPORTS TO EXCEL
   */
  exportToExcel() {
    this.spinner.show();
    this.unitTypeService.getAllUnitTypes()
      .subscribe(res => {
        const allData = res.data as ProductUnitType[];
        const date = this.utilsService.getDateString(new Date());
        // EXPORT XLSX
        const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(allData);
        const wb: XLSX.WorkBook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'unitTypes');
        XLSX.writeFile(wb, `Tags_Backup_${date}.xlsx`);
        this.spinner.hide();
      }, error => {
        this.spinner.hide();
        console.log(error);
      });
  }

  /**
   * GENERIC FORMAT
   */
  exportExcelFormat() {
    this.spinner.show();
    const data: ProductUnitType[] = [
      { name: 'Test Unit 23', unitQuantity: 1 }
    ];
    // EXPORT XLSX
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(data);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'unitTypes');
    XLSX.writeFile(wb, `Unit_Types_Import_Format.xlsx`);
    this.spinner.hide();
  }


  /**
   * DOWNLOADABLE JSON
   */
  exportAsAJson() {
    this.unitTypeService.getAllUnitTypes()
      .subscribe(res => {
        const allData = res.data as ProductUnitType[];

        const blob = new Blob([JSON.stringify(allData, null, 2)], { type: 'application/json' });
        this.dialog.open(DownloadJsonDialogComponent, {
          maxWidth: '500px',
          data: {
            blobUrl: window.URL.createObjectURL(blob),
            backupType: 'unitTypes'
          }
        });
      }, error => {
        console.log(error);
      });

  }


  /**
   * ON DESTROY
   */
  ngOnDestroy() {
    if (this.subAcRoute) {
      this.subAcRoute.unsubscribe();
    }
    if (this.subForm) {
      this.subForm.unsubscribe();
    }
  }


}
