import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {UiService} from '../../../../../services/ui.service';
import {UtilsService} from '../../../../../services/utils.service';
import {StorageService} from '../../../../../services/storage.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {HttpStatusCodeEnum} from '../../../../../enum/http-status-code.enum';
import {UnitTypeService} from '../../../../../services/unit-type.service';
import {ProductUnitType} from '../../../../../interfaces/product-unit-type';

@Component({
  selector: 'app-add-new-unit',
  templateUrl: './add-new-unit.component.html',
  styleUrls: ['./add-new-unit.component.scss']
})
export class AddNewUnitComponent implements OnInit {

  // Form Template Ref
  @ViewChild('templateForm') templateForm: NgForm;

  dataForm?: FormGroup;
  private sub: Subscription;

  autoSlug = true;
  isLoading = false;

  // Store Data from param
  id?: string;
  unitType: ProductUnitType;

  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private uiService: UiService,
    private unitTypeService: UnitTypeService,
    private utilsService: UtilsService,
    private storageService: StorageService,
    private spinner: NgxSpinnerService,
  ) {
  }

  ngOnInit(): void {
    this.dataForm = this.fb.group({
      name: [null, Validators.required],
      unitValue: [1],
      unitQuantity: [null, Validators.required],
    });

    // this.autoGenerateSlug();

    // GET ID FORM PARAM
    this.activatedRoute.paramMap.subscribe((param) => {
      this.id = param.get('id');

      if (this.id) {
        this.getUnitTypeByUnitTypeId();
      }
    });
  }

  onSubmit() {
    if (this.dataForm.invalid) {
      this.uiService.warn('Please complete all the required fields');
      return;
    }

    if (this.unitType) {
      const finalData = {...this.dataForm.value, ...{_id: this.unitType._id}};
      this.editUnitTypeData(finalData);
    } else {
      this.addUnitType(this.dataForm.value);
    }

  }

  autoGenerateSlug() {
    if (this.autoSlug === true) {
      this.sub = this.dataForm.get('tagName').valueChanges
        .pipe(
          // debounceTime(200),
          // distinctUntilChanged()
        ).subscribe(d => {
          const res = d?.trim().replace(/[^A-Z0-9]+/ig, '-').toLowerCase();
          this.dataForm.patchValue({
            tagSlug: res
          });
        });
    } else {
      if (this.sub === null || this.sub === undefined) {
        return;
      }
      this.sub.unsubscribe();
    }
  }

  /**
   * ON HOLD INPUT DATA
   */

  onHoldInputData() {
    this.storageService.storeInputData(this.dataForm?.value, 'UNIT_INPUT');
  }


  /**
   * HTTP REQ HANDLE
   * GET ATTRIBUTES BY ID
   */

  private addUnitType(data: ProductUnitType) {
    this.spinner.show();
    this.unitTypeService.addUnitType(data)
      .subscribe(res => {
        this.uiService.success(res.message);
        this.templateForm.resetForm();
        this.spinner.hide();
      }, error => {
        this.spinner.hide();
        if (error.error.statusCode === HttpStatusCodeEnum.EXISTS_OR_NOT_ACCEPT) {
          this.dataForm.controls.name.setErrors({incorrect: true});
        }
      });
  }

  private getUnitTypeByUnitTypeId() {
    this.spinner.show();
    this.unitTypeService.getUnitTypeByUnitTypeId(this.id)
      .subscribe(res => {
        if (res.data) {
          this.dataForm.patchValue(res.data);
          this.unitType = res.data;
          this.spinner.hide();
        }
      }, error => {
        console.log(error);
        this.spinner.hide();
      });
  }

  private editUnitTypeData(data: ProductUnitType) {
    this.spinner.show();
    this.unitTypeService.editUnitTypeData(data)
      .subscribe(res => {
        this.uiService.success(res.message);
        this.storageService.removeSessionData('UNIT_INPUT');
        this.spinner.hide();
      }, error => {
        console.log(error);
        this.spinner.hide();
      });
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }


}
