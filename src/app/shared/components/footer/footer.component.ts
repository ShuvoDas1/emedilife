import {Component, Input, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {UiService} from '../../../services/ui.service';
import {NewsletterService} from '../../../services/newsletter.service';
import {ShopInfo} from '../../../interfaces/shop-info';
import {FooterDataService} from '../../../services/footer-data.service';
import {FooterData} from '../../../interfaces/footer-data';
import {UtilsService} from '../../../services/utils.service';
import {ShopService} from '../../../services/shop.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Input() shopInfo: ShopInfo;

  footerData: FooterData;

  shopInfo2: ShopInfo;
  facebook: any;
  twitter: any;
  linkedIn: any;
  youTube: any;
  instagram: any;
  playStore: string;
  appStore: string;


  constructor(
    private newsletterService: NewsletterService,
    private uiService: UiService,
    private footerDataService: FooterDataService,
    private utilsService: UtilsService,
    private shopService: ShopService,
  ) {
  }

  ngOnInit(): void {
    this.getFooterData();
    this.getShopInfo();
  }

  onSubmit(dataForm: NgForm) {
    if (dataForm.invalid) {
      this.uiService.warn('Please enter a valid email');
      return;
    }
    if (this.utilsService.validateEmail(dataForm.value.email)) {
      this.newsletterService.addNewsletter(dataForm.value)
        .subscribe(res => {
          this.uiService.success(res.message);
          dataForm.resetForm();
        }, error => {
          console.log(error);
        });
    } else{
      this.uiService.warn('Please insert valid email Address');
    }
  }

  private getShopInfo() {
    this.shopService.getShopInfo()
      .subscribe(res => {
        this.shopInfo2 = res.data;
        if (this.shopInfo2) {
          // @ts-ignore
          for (const data of this.shopInfo2.socialLinks) {
            if (data.type === 0){
              this.facebook = data;
            }
            if (data.type === 1){
              this.youTube = data;
            }
            if (data.type === 2){
              this.twitter = data;
            }
            if (data.type === 4){
              this.linkedIn = data;
            }
            if (data.type === 3){
              this.instagram = data;
            }
          }

          for (const data of this.shopInfo2.downloadUrls) {
            if (data.type === 0){
              this.playStore = data.value;
            }
            if (data.type === 1){
              this.appStore = data.value;
            }
          }

        }
      }, err => {
        console.log(err);
      });
  }

  private getFooterData() {
    this.footerDataService.getFooterData()
      .subscribe(res => {
        this.footerData = res.data;
      }, err => {
        console.log(err);
      });
  }
}
