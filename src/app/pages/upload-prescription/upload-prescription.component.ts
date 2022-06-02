import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserDataService } from '../../services/user-data.service';
import { UiService } from '../../services/ui.service';
import { User } from '../../interfaces/user';
import { CITIES } from '../../core/utils/app-data';
import { FileUploadService } from '../../services/file-upload.service';
import { UtilsService } from '../../services/utils.service';
import { PrescriptionOrderService } from '../../services/prescription-order.service';
import { PrescriptionOrder } from '../../interfaces/prescription-order';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../shared/components/ui/confirm-dialog/confirm-dialog.component';
import { BulkSmsService } from 'src/app/services/bulk-sms.service';
import { DistrictService } from 'src/app/services/district.service';
import { AreaService } from './../../services/area.service';
import { Area } from './../../interfaces/area';
import { District } from './../../interfaces/district';
import { MatSelectChange } from '@angular/material/select';




@Component({
  selector: 'app-upload-prescription',
  templateUrl: './upload-prescription.component.html',
  styleUrls: ['./upload-prescription.component.scss']
})
export class UploadPrescriptionComponent implements OnInit {

  public dataForm: FormGroup;
  user: User = null;

  // Static Data
  cities: string[] = CITIES;
  districts: District[];
  areas: Area[];

  // Upload File
  files: File[] = [];

  constructor(
    private fb: FormBuilder,
    private userDataService: UserDataService,
    private uiService: UiService,
    private fileUploadService: FileUploadService,
    private utilsService: UtilsService,
    private prescriptionOrderService: PrescriptionOrderService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private dialog: MatDialog,
    private bulkSmsService: BulkSmsService,
    private districtService: DistrictService,
    private areaService: AreaService
  ) {

  }

  ngOnInit(): void {
    this.initForm();
    this.getLoggedInUserInfo();
    this.getAllDistricts();
  }

  /**
   * INIT FORM
   */
  private initForm() {
    this.dataForm = this.fb.group({

      name: [null],
      phoneNo: [null, Validators.required],
      email: [null],
      district: [null, Validators.required],
      area: [null, Validators.required],
      shippingAddress: [null, Validators.required],
      note: [null]
      // orderNotes: [null],
    });
  }

  /**
   * HTTP REQ HANDLE
   */

  //  Get All Districts and Area

  getAllDistricts() {
    this.districtService.getAllDistricts()
      .subscribe(res => {
        this.districts = res.data
        // console.log(res.data)
        this.districts.map(district => {
          if (district) {
            this.getAllAreaByDistrict({ district: district._id })
          }
        })
      })
  }

  private getAllAreaByDistrict(filter: any) {
    console.log(filter)
    this.areaService.getAllAreaByDistrict(filter)
      .subscribe(res => {
        // console.log(res.data)
        this.areas = res.data;
        // this.dataForm.patchValue({ area: this.user.area });
      }, error => {
        console.log(error);
      });
  }

  onDistrictChange(event: MatSelectChange) {
    // this.getFinalShippingCharge();
    // console.log(event.value);
    const districtId = this.districts.find(district => district.district === event.value)._id;
    const filter = { district: districtId };
    this.getAllAreaByDistrict(filter);
  }


  private getLoggedInUserInfo() {
    this.spinner.show();
    const select = 'phoneNo fullName profileImg';
    this.userDataService.getLoggedInUserInfo(select)
      .subscribe(res => {
        this.spinner.hide();
        this.user = res.data;
        // console.log(this.user);
        if (this.user) {
          this.dataForm.patchValue(
            { ...this.user, ...{ name: this.user.fullName } }
          );
        }
        // console.log(this.user);
      }, error => {
        this.spinner.hide();
        console.log(error);
      });
  }

  private placeOrder(data: PrescriptionOrder) {
    this.prescriptionOrderService.placeOrder(data)

      .subscribe(res => {
        // console.log(res)
        this.spinner.hide();
        if (res.status) {
          this.router.navigate(['/account/prescription-order-list']);
          this.uiService.success(res.message);
          const finalPhoneNo = data.phoneNo;
          const message = `Dear ${data.name}, Your order ${res.orderId} has been placed. We will update you once the order is confirmed. Thank you for shopping at www.emedilife.com`;
          this.sentSingleBulkSms(finalPhoneNo, message);
        } else {
          this.uiService.warn(res.message);
        }

      }, error => {
        this.spinner.hide();
        console.log(error);
      });
  }

  /**
   * IMAGE DRUG & DROP
   */
  onSelect(event: { addedFiles: any; }) {
    this.files.push(...event.addedFiles);
  }

  onRemove(event: File) {
    this.files.splice(this.files.indexOf(event), 1);
  }

  private sentSingleBulkSms(phoneNo: string, message: string) {
    this.bulkSmsService.sentSingleBulkSms(phoneNo, message)
      .subscribe(res => {
        // console.log(res);
      }, error => {
        console.log(error);
      });
  }

  /**
   * ON SUBMIT
   */
  onSubmit() {

    if (this.dataForm.invalid) {
      this.uiService.warn('Please complete all the required field');

      return;
    }
    if (!this.files || !this.files.length) {
      this.uiService.warn('No Image selected!');
      return;
    }
    this.openConfirmDialog();
  }

  /**
   * ON IMAGE UPLOAD
   */
  onUploadImages() {
    this.spinner.show();
    this.fileUploadService.uploadMultiImageOriginal(this.files)
      .subscribe(res => {
        const downloadUrls = res.downloadUrls;
        const finalData = {
          ...this.dataForm.value,
          userId: this.user._id,
          orderTimeline: {
            others: false,
            othersData: null,
            orderPlaced: true,
            orderPlacedDate: new Date(),
            orderProcessing: false,
            orderProcessingDate: null,
            orderPickedByDeliveryMan: false,
            orderPickedByDeliveryManDate: null,
            orderDelivered: false,
            orderDeliveredDate: null
          },

          ...{
            images: downloadUrls,
            checkoutDate: new Date()
          }
        };
        // console.log(finalData);
        this.placeOrder(finalData);


      }, error => {
        this.uiService.wrong('Upload Image Failed');
        this.spinner.hide();
        console.log(error);
      });
  }

  /**
   * COMPONENT DIALOg
   */
  public openConfirmDialog() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: '400px',
      data: {
        title: 'Confirm Order',
        message: 'Are you sure you want confirm this prescription order?'
      }
    });
    dialogRef.afterClosed().subscribe(dialogResult => {
      if (dialogResult) {
        this.onUploadImages();
      }
    });
  }


}
