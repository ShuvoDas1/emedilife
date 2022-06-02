import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../../services/data.service';
import { AdminService } from '../../../services/admin.service';
import { StoredDataService } from '../../../services/stored-data.service';
import { AdminApiService } from 'src/app/services/admin-api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  dashboardData: any;
  counts: any;
  orders: any;



  constructor(
    private router: Router,
    private dataService: DataService,
    private adminService: AdminService,
    private storedDataService: StoredDataService,
    private adminApiService: AdminApiService

  ) {

  }

  ngOnInit() {
    this.getUserData();
    // this.countsCollectionsDocuments();
    this.getDashboardData();


  }

  getDashboardData() {
    this.adminApiService.getDashboardData()
      .subscribe(res => {
        this.dashboardData = res.data;
        const { counts: counts, recents: recents } = this.dashboardData;
        this.counts = counts;
        this.orders = recents.orders;
        console.log(this.orders);

      },
        error => {
          console.log(error.message);
        });


  }

  /**
   * HTTP REQ HANDLE
   */

  // private countsCollectionsDocuments() {
  //   this.dataService.countsCollectionsDocuments()
  //     .subscribe(res => {
  //       this.counts = res.data;
  //     }, error => {
  //       console.log(error);
  //     });
  // }

  /**
   * HTTP Requested Data
   */
  private getUserData() {
    this.adminService.getAdminShortData()
      .subscribe(res => {
      });
  }

}
