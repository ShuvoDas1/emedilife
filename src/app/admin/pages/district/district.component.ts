import { Component, OnInit } from '@angular/core';
import {District} from '../../../interfaces/district';
import {MatDialog} from '@angular/material/dialog';
import {UiService} from '../../../services/ui.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {ReloadService} from '../../../services/reload.service';
import {DistrictService} from '../../../services/district.service';
import {ConfirmDialogComponent} from '../../../shared/components/ui/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-district',
  templateUrl: './district.component.html',
  styleUrls: ['./district.component.scss']
})
export class DistrictComponent implements OnInit {

  districts: District[] = [];

  constructor(
    private dialog: MatDialog,
    private districtService: DistrictService,
    private uiService: UiService,
    private reloadService: ReloadService,
    private spinner: NgxSpinnerService,
  ) { }

  ngOnInit(): void {
    this.reloadService.refreshDistrict$
      .subscribe(() => {
        this.getAllDistricts();
      });
    this.getAllDistricts();
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
        this.deleteDistrictByDistrictId(data);
      }
    });
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

  /**
   * DELETE METHOD HERE
   */
  private deleteDistrictByDistrictId(id: string) {
    this.spinner.show();
    this.districtService.deleteDistrictByDistrictId(id)
      .subscribe(res => {
        this.uiService.success(res.message);
        this.reloadService.needRefreshDistrict$();
        this.spinner.hide();
      }, error => {
        console.log(error);
        this.spinner.hide();
      });
  }

}
