import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Pagination } from '../interfaces/pagination';
import { ProductGeneric } from '../interfaces/product-generic';


const API_GENERIC = environment.apiBaseLink + '/api/generic/';

@Injectable({
  providedIn: 'root'
})
export class GenericService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  /**
   * TAG
   */
  addGeneric(data: ProductGeneric) {
    return this.httpClient.post<{ message: string }>(API_GENERIC + 'add-single-generic', data);
  }

  insertManyGeneric(data: ProductGeneric[]) {
    return this.httpClient.post<{ success: boolean, message: string }>(API_GENERIC + 'add-multiple-generic', data);
  }


  getAllGenerics(pagination?: Pagination) {
    if (pagination) {
      let params = new HttpParams();
      params = params.append('pageSize', pagination.pageSize);
      params = params.append('page', pagination.currentPage);
      return this.httpClient.get<{ data: ProductGeneric[], message?: string, count: number }>(API_GENERIC + 'get-all-tags', { params });
    } else {
      return this.httpClient.get<{ data: ProductGeneric[], message?: string, count: number }>(API_GENERIC + 'get-all-tags');
    }

  }

  getAllGenericsWithCount(pagination?: Pagination) {
    if (pagination) {
      let params = new HttpParams();
      params = params.append('pageSize', pagination.pageSize);
      params = params.append('page', pagination.currentPage);
      return this.httpClient.get<{ data: ProductGeneric[], message?: string, count: number }>(API_GENERIC + 'get-all-tags-with-count', { params });
    } else {
      return this.httpClient.get<{ data: ProductGeneric[], message?: string, count: number }>(API_GENERIC + 'get-all-tags-with-count');
    }

  }


  getGenericByGenericId(id: string) {
    return this.httpClient.get<{ data: ProductGeneric, message?: string }>(API_GENERIC + 'get-generic-by-generic-id/' + id);
  }

  editGenericData(data: ProductGeneric) {
    return this.httpClient.put<{ message?: string }>(API_GENERIC + 'edit-generic-by-generic', data);
  }

  deleteGeneric(id: string) {
    return this.httpClient.delete<{ message?: string }>(API_GENERIC + 'delete-generic-by-id/' + id);
  }


  getSearchGeneric(searchTerm: string, pagination?: Pagination) {
    const paginate = pagination;
    let params = new HttpParams();
    params = params.append('q', searchTerm);
    params = params.append('pageSize', pagination.pageSize);
    params = params.append('currentPage', pagination.currentPage);
    return this.httpClient.get<{ data: ProductGeneric[], count: number }>(API_GENERIC + 'get-tags-by-search-with-count', { params });
  }


}
