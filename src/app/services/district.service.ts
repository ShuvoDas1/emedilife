import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {District} from '../interfaces/district';

const API_DISTRICT = environment.apiBaseLink + '/api/district/';


@Injectable({
  providedIn: 'root'
})

// tslint:disable-next-line:class-name
export class DistrictService {

  constructor(
    private httpClient: HttpClient,
    private router: Router,
  ) {
  }

  /**
   * district
   */
  addDistrict(data: District) {
    return this.httpClient.post<{message: string}>(API_DISTRICT + 'add-district', data);
  }

  getAllDistricts() {
    console.log('getAllDistricts');
    return this.httpClient.get<{data: District[], message?: string}>(API_DISTRICT + 'get-all-districts');
  }

  getDistrictByDistrictId(id: string) {
    return this.httpClient.get<{data: District, message?: string}>(API_DISTRICT + 'get-district-by-district-id/' + id);
  }

  editDistrictData(data: District) {
    return this.httpClient.put<{message?: string}>(API_DISTRICT + 'edit-district-by-district', data);
  }

  deleteDistrictByDistrictId(id: string) {
    return this.httpClient.delete<{message?: string}>(API_DISTRICT + 'delete-district-by-id/' + id);
  }
}
