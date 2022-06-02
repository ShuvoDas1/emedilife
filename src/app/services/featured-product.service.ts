import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Pagination} from '../interfaces/pagination';
import {FeaturedProduct} from '../interfaces/featured-product';
import {Observable} from 'rxjs';

const API_FEATURED_PRODUCT = environment.apiBaseLink + '/api/featured-product/';

@Injectable({
  providedIn: 'root'
})
export class FeaturedProductService {

  allFeaturedProduct: FeaturedProduct[] = [];
  currentQueryField: string = null;

  constructor(
    private http: HttpClient,
  ) {
  }

  /**
   * Image Folder
   */

  addNewFeaturedProduct(data: FeaturedProduct) {
    return this.http.post<{ message: string }>(API_FEATURED_PRODUCT + 'add-new-featured-product', data);
  }


  getAllFeaturedProduct(pagination?: Pagination) {
    if (pagination) {
      let params = new HttpParams();
      params = params.append('pageSize', pagination.pageSize);
      params = params.append('page', pagination.currentPage);
      return this.http.get<{ data: FeaturedProduct[], count: number, message?: string }>
      (API_FEATURED_PRODUCT + 'get-all-featured-product-list', {params});
    } else {
      return this.http.get<{ data: FeaturedProduct[], count: number, message?: string }>
      (API_FEATURED_PRODUCT + 'get-all-featured-product-list');
    }
  }


  getSingleFeaturedProductById(id: string, selectProductField?: string) {
    let params = new HttpParams();
    if (selectProductField) {
      params = params.append('select', selectProductField);
    }
    // tslint:disable-next-line:max-line-length
    return this.http.get<{ data: FeaturedProduct, message?: string }>(API_FEATURED_PRODUCT + 'get-featured-product-by-id/' + id, {params});
  }


  editFeaturedProduct(data: FeaturedProduct) {
    return this.http.put<{ message: string }>(API_FEATURED_PRODUCT + 'edit-featured-product-by-id', data);
  }

  deleteFeaturedProductById(id: string) {
    return this.http.delete<{ message: string }>(API_FEATURED_PRODUCT + 'delete-featured-product-by-id/' + id);
  }

  /**
   * Get No Repeat Data
   */

  getAllFeaturedProductNoRepeat(): Observable<{ data: FeaturedProduct[] }> {
    return new Observable((observer) => {
      if (this.allFeaturedProduct.length > 0) {
        observer.next({data: this.allFeaturedProduct});
        observer.complete();
      } else {
        this.http.get<{ data: FeaturedProduct[] }>(API_FEATURED_PRODUCT + 'get-all-featured-category-list')
          .subscribe((res) => {
            this.allFeaturedProduct = res.data;
            observer.next({data: this.allFeaturedProduct});
            observer.complete();
          }, error => {
            console.log(error);
          });
      }
    });
  }


}
