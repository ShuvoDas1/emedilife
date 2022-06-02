import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Area} from '../interfaces/area';

const API_AREA = environment.apiBaseLink + '/api/area/';


@Injectable({
  providedIn: 'root'
})

export class AreaService {

  constructor(
    private httpClient: HttpClient,
    private router: Router,
  ) {
  }

  /**
   * area
   */
  addArea(data: Area) {
    return this.httpClient.post<{message: string}>(API_AREA + 'add-area-info', data);
  }

  getAllAreas() {
    return this.httpClient.get<{data: Area[], message?: string}>(API_AREA + 'get-all-area-info');
  }

  getAllAreaByDistrict(filter: object) {
    return this.httpClient.post<{data: Area[], message?: string}>(API_AREA + 'get-all-area-by-district', {filter});
  }

  getAreaByAreaId(id: string) {
    return this.httpClient.get<{data: Area, message?: string}>(API_AREA + 'get-area-info-by-area-info-id/' + id);
  }

  editAreaData(data: Area) {
    return this.httpClient.put<{message?: string}>(API_AREA + 'edit-area-info-by-area-info', data);
  }

  deleteAreaByAreaId(id: string, districtId: string) {
    return this.httpClient.delete<{message?: string}>(API_AREA + 'delete-area-info-by-id/' + id + '/' + districtId);
  }
}
