import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { getDashboardInfo } from 'src/utils/url';
import { AdminService } from './admin.service';

// const API_ADMIN = environment.apiBaseLink + '/api/admin/';

@Injectable({
  providedIn: 'root'
})
export class AdminApiService {

  constructor(
    private httpClient: HttpClient,
    private adminService: AdminService
  ) {
    this.getDashboardData();
  }



  //Get Dashboard Data Service



  getDashboardData() {
    return this.httpClient.get<{ data: any }>(getDashboardInfo);
  }

  // getDashboardData()

}
