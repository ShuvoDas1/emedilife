import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserDataService} from '../../../services/user-data.service';
import {UiService} from '../../../services/ui.service';
import {ReloadService} from '../../../services/reload.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {UtilsService} from '../../../services/utils.service';
import {User} from '../../../interfaces/user';
import {Select} from '../../../interfaces/select';
import {District} from '../../../interfaces/district';
import {Area} from '../../../interfaces/area';
import {DistrictService} from '../../../services/district.service';
import {AreaService} from '../../../services/area.service';
import {MatSelectChange} from '@angular/material/select';

@Component({
  selector: 'app-edit-basic-info',
  templateUrl: './edit-basic-info.component.html',
  styleUrls: ['./edit-basic-info.component.scss']
})
export class EditBasicInfoComponent implements OnInit {


  public formData: FormGroup;

  districts: District[] = [];
  areas: Area[] = [];

  genders: Select[] = [
    {value: 'male', viewValue: 'Male'},
    {value: 'female', viewValue: 'Female'},
    {value: 'other', viewValue: 'Other'},
  ];

  constructor(
    private fb: FormBuilder,
    private userDataService: UserDataService,
    private uiService: UiService,
    private reloadService: ReloadService,
    public dialogRef: MatDialogRef<EditBasicInfoComponent>,
    public utilsService: UtilsService,
    private districtService: DistrictService,
    private areaService: AreaService,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
  }

  ngOnInit(): void {

    this.formData = this.fb.group({
      fullName: [null, Validators.required],
      phoneNo: [null, Validators.required],
      email: [null, Validators.required],
      district: [null],
      area: [null],
      shippingAddress: [null],
      gender: null,
      birthdate: null,
      occupation: null,
    });

    this.getAllDistricts();
    this.setFormData();

  }

  private setFormData() {
    this.formData.patchValue(this.data);
  }

  /**
   * ON SUBMIT FORM
   */

  onSubmit() {
    if (this.formData.invalid) {
      this.uiService.warn('Please complete all the required field');
      return;
    }
    const mData = {
      birthdate: this.utilsService.getDateWithCurrentTime(this.formData.value.birthdate),
    };

    const finalData = {...this.formData.value, ...mData};
    this.editLoggedInUserData(finalData);
  }

  editLoggedInUserData(data: User) {
    this.userDataService.editLoginUserInfo(data)
      .subscribe((res) => {
        this.uiService.success(res.message);
        this.reloadService.needRefreshUser$();
        this.dialogRef.close();
        // this.matDialog.closeAll();
      }, error => {
        console.log(error);
      });
  }

  private getAllDistricts() {
    this.districtService.getAllDistricts()
      .subscribe(res => {
        this.districts = res.data;
        const districtId = this.districts.find(f => f.district === String(this.data.district))._id;
        if (districtId) {
          this.getAllAreaByDistrict({district: districtId});
        }
      }, error => {
        console.log(error);
      });
  }

  private getAllAreaByDistrict(filter: any) {
    this.areaService.getAllAreaByDistrict(filter)
      .subscribe(res => {
        this.areas = res.data;
        this.formData.patchValue({area: this.data.area});
      }, error => {
        console.log(error);
      });
  }

  onDistrictChange(event: MatSelectChange) {
    const districtId = this.districts.find(f => f.district === event.value)._id;
    const filter = {district: districtId};
    this.getAllAreaByDistrict(filter);
  }


}
