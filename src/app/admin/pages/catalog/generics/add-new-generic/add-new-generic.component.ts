import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {UiService} from '../../../../../services/ui.service';
import {UtilsService} from '../../../../../services/utils.service';
import {StorageService} from '../../../../../services/storage.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {HttpStatusCodeEnum} from '../../../../../enum/http-status-code.enum';
import {GenericService} from '../../../../../services/generic.service';
import {ProductGeneric} from '../../../../../interfaces/product-generic';

@Component({
  selector: 'app-add-new-generic',
  templateUrl: './add-new-generic.component.html',
  styleUrls: ['./add-new-generic.component.scss']
})
export class AddNewGenericComponent implements OnInit, OnDestroy {

  // Form Template Ref
  @ViewChild('templateForm') templateForm: NgForm;


  dataForm?: FormGroup;
  private sub: Subscription;

  autoSlug = true;
  isLoading = false;

  // Store Data from param
  id?: string;
  generic: ProductGeneric;

  // Image Holder
  placeholder = '/assets/images/avatar/image-upload.jpg';
  pickedImage?: string;


  // Destroy Session
  needSessionDestroy = true;


  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private uiService: UiService,
    private genericService: GenericService,
    private utilsService: UtilsService,
    private storageService: StorageService,
    public router: Router,
    private spinner: NgxSpinnerService,
  ) {
  }

  ngOnInit(): void {
    this.dataForm = this.fb.group({
      name: [null, Validators.required],
      slug: [null, Validators.required],
      shortNote: [null],
      image: [null],
    });

    this.pickedImage = this.placeholder;

    // Image From state
    if (!this.id) {
      if (this.storageService.getStoredInput('GENERIC_INPUT')) {
        this.dataForm.patchValue(this.storageService.getStoredInput('GENERIC_INPUT'));
      }

      if (history.state.images) {
        this.needSessionDestroy = true;
        this.pickedImage = history.state.images[0].url;
        this.dataForm.patchValue(
          {image: this.pickedImage}
        );
      }

    }

    this.autoGenerateSlug();

    // GET ID FORM PARAM
    this.activatedRoute.paramMap.subscribe((param) => {
      this.id = param.get('id');
      if (this.id) {
        this.getGenericByGenericId();
      }
    });


  }


  /**
   * SET FORM DATA
   */
  private setFormData() {
    this.dataForm.patchValue(this.generic);

    if (this.storageService.getStoredInput('GENERIC_INPUT')) {
      this.dataForm.patchValue(this.storageService.getStoredInput('GENERIC_INPUT'));
    }

    if (history.state.images) {
      this.needSessionDestroy = true;
      this.pickedImage = history.state.images[0].url;
      this.dataForm.patchValue(
        {image: this.pickedImage}
      );
    } else {
      this.pickedImage = this.generic.image ? this.generic.image : this.placeholder;
    }
  }


  onSubmit() {
    if (this.dataForm.invalid) {
      this.uiService.warn('Please complete all the required fields');
      return;
    }
    if (this.generic) {
      const finalData = {...this.dataForm.value, ...{_id: this.generic._id}};
      this.editGenericData(finalData);
    } else {
      this.addGeneric(this.dataForm.value);
    }
  }

  autoGenerateSlug() {
    if (this.autoSlug === true) {
      this.sub = this.dataForm.get('name').valueChanges
        .pipe(
        ).subscribe(d => {
          const res = d?.trim().replace(/[^A-Z0-9]+/ig, '-').toLowerCase();
          this.dataForm.patchValue({
            slug: res
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
    this.needSessionDestroy = false;
    this.storageService.storeInputData(this.dataForm?.value, 'GENERIC_INPUT');
  }


  /**
   * HTTP REQ HANDLE
   * GET ATTRIBUTES BY ID
   */

  private addGeneric(data: ProductGeneric) {
    this.spinner.show();
    this.genericService.addGeneric(data)
      .subscribe(res => {
        this.uiService.success(res.message);
        this.templateForm.resetForm();
        this.storageService.removeSessionData('GENERIC_INPUT');
        this.pickedImage = this.placeholder;
        this.spinner.hide();
      }, error => {
        this.spinner.hide();
        if (error.error.statusCode === HttpStatusCodeEnum.EXISTS_OR_NOT_ACCEPT) {
          this.dataForm.controls.name.setErrors({incorrect: true});
        }
      });
  }

  private getGenericByGenericId() {
    this.spinner.show();
    this.genericService.getGenericByGenericId(this.id)
      .subscribe(res => {
        this.generic = res.data;
        if (this.generic) {
          this.setFormData();
        }
        this.spinner.hide();
      }, error => {
        console.log(error);
      });
  }

  private editGenericData(data: ProductGeneric) {
    this.spinner.show();
    this.genericService.editGenericData(data)
      .subscribe(res => {
        this.uiService.success(res.message);
        this.storageService.removeSessionData('GENERIC_INPUT');
        this.spinner.hide();
      }, error => {
        console.log(error);
        this.spinner.hide();
      });
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
    if (this.needSessionDestroy) {
      this.storageService.removeSessionData('GENERIC_INPUT');
    }
  }

}
