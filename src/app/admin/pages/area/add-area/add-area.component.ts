import {Component, OnInit, ViewChild} from '@angular/core';
import {District} from '../../../../interfaces/district';
import {DistrictService} from '../../../../services/district.service';
import {UiService} from '../../../../services/ui.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {AreaService} from '../../../../services/area.service';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import {UtilsService} from '../../../../services/utils.service';
import {StorageService} from '../../../../services/storage.service';
import {ActivatedRoute} from '@angular/router';
import {Area} from '../../../../interfaces/area';

@Component({
  selector: 'app-add-area',
  templateUrl: './add-area.component.html',
  styleUrls: ['./add-area.component.scss']
})
export class AddAreaComponent implements OnInit {

  // Form Template Ref
  @ViewChild('templateForm') templateForm: NgForm;

  dataForm?: FormGroup;
  private sub: Subscription;

  autoSlug = true;
  isLoading = false;

  // Store Data from param
  id?: string;
  area: Area;

  districts: District[] = [];

  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private districtService: DistrictService,
    private areaService: AreaService,
    private uiService: UiService,
    private utilsService: UtilsService,
    private storageService: StorageService,
    private spinner: NgxSpinnerService,
  ) { }

  ngOnInit(): void {
    this.dataForm = this.fb.group({
      area: [null, Validators.required],
      areabn: [null],
      district: [null, Validators.required],
    });

    // GET ID FORM PARAM
    this.activatedRoute.paramMap.subscribe((param) => {
      this.id = param.get('id');

      if (this.id) {
        this.getAreaByAreaId();
      }
    });

    this.getAllDistricts();
  }


  onSubmit() {
    if (this.dataForm.invalid) {
      this.uiService.warn('Please complete all the required fields');
      return;
    }

    if (this.area) {
      const finalData = {...this.dataForm.value, ...{_id: this.area._id}};
      this.editAreaData(finalData);
    } else {
      this.addArea(this.dataForm.value);
    }
  }

  /**
   * ON HOLD INPUT DATA
   */

  onHoldInputData() {
    this.storageService.storeInputData(this.dataForm?.value, 'AREA_INPUT');
  }

  /**
   * HTTP REQ HANDLE
   */
  private getAllDistricts() {
    this.spinner.show();
    this.districtService.getAllDistricts()
      .subscribe(res => {
        console.log(res);
        this.spinner.hide();
        this.districts = res.data;

      }, error => {
        this.spinner.hide();
        console.log(error);
      });
  }


  private addArea(data: Area) {
    this.spinner.show();
    this.areaService.addArea(data)
      .subscribe(res => {
        this.uiService.success(res.message);
        this.templateForm.resetForm();
        this.spinner.hide();
      }, error => {
        console.log(error);
        this.spinner.hide();
      });
  }

  private getAreaByAreaId() {
    this.spinner.show();
    this.areaService.getAreaByAreaId(this.id)
      .subscribe(res => {
        if (res.data) {
          this.dataForm.patchValue(res.data);
          this.area = res.data;
          this.spinner.hide();
        }
      }, error => {
        console.log(error);
        this.spinner.hide();
      });
  }

  private editAreaData(data: Area) {
    this.spinner.show();
    this.areaService.editAreaData(data)
      .subscribe(res => {
        this.uiService.success(res.message);
        this.storageService.removeSessionData('AREA_INPUT');
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
