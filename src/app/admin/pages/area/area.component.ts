import { Component, OnInit } from '@angular/core';
import { Area } from '../../../interfaces/area';
import { MatDialog } from '@angular/material/dialog';
import { UiService } from '../../../services/ui.service';
import { ReloadService } from '../../../services/reload.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { AreaService } from '../../../services/area.service';
import { ConfirmDialogComponent } from '../../../shared/components/ui/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {


  areas: Area[] = [];

  constructor(
    private dialog: MatDialog,
    private areaService: AreaService,
    private uiService: UiService,
    private reloadService: ReloadService,
    private spinner: NgxSpinnerService,
  ) { }

  ngOnInit(): void {
    this.reloadService.refreshArea$
      .subscribe(() => {
        this.getAllAreas();
      });
    this.getAllAreas();
  }


  /**
   * COMPONENT DIALOG VIEW
   */
  public openConfirmDialog(data?: string, districtId?: string) {
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
        this.deleteAreaByAreaId(data, districtId);
      }
    });
  }

  /**
   * HTTP REQ HANDLE
   */

  private getAllAreas() {
    this.spinner.show();
    this.areaService.getAllAreas()
      .subscribe(res => {
        // console.log(res);
        this.spinner.hide();
        this.areas = res.data;

      }, error => {
        this.spinner.hide();
        console.log(error);
      });
  }

  /**
   * DELETE METHOD HERE
   */
  private deleteAreaByAreaId(id: string, districtId: string) {
    this.spinner.show();
    this.areaService.deleteAreaByAreaId(id, districtId)
      .subscribe(res => {
        this.uiService.success(res.message);
        this.reloadService.needRefreshArea$();
        this.spinner.hide();
      }, error => {
        console.log(error);
        this.spinner.hide();
      });
  }
}
