import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Order } from '../interfaces/order';
import { Pagination } from '../interfaces/pagination';
import { PrescriptionOrder } from '../interfaces/prescription-order';
import { cancelOrderByAdmin, placedPrescriptionOrder } from "../../utils/url";
import { confirmPrescriptionOrder } from 'src/utils/url';
import { _countGroupLabelsBeforeOption } from '@angular/material/core';

const API_ORDER = environment.apiBaseLink + '/api/admin/order/';
const API_ORDER_WEB = environment.apiBaseLink + '/api/web/order/';
const API_ORDER_TEMP = environment.apiBaseLink + '/api/order-temporary/';

@Injectable({
  providedIn: 'root'
})
export class PrescriptionOrderService {

  constructor(
    private httpClient: HttpClient
  ) {
  }


  /**
   * ORDER
   */
  placeOrder(data: PrescriptionOrder) {
    // console.log("data", data)
    return this.httpClient.post<{ _id: string; orderId: any; message: string; status: boolean }>(placedPrescriptionOrder, data);
  }



  confirmPrescriptionOrder(data: any) {
    return this.httpClient.post<{ _id: string; orderId: any; message: string; status: boolean }>(API_ORDER + 'confirm-prescription-order', data);
  }

  placeTempOrder(data: Order) {
    return this.httpClient.post<{ _id: string; orderId: any; message: string; success: boolean }>(API_ORDER_TEMP + 'place-temp-order', data);
  }

  updateOrderSessionKey(tranId: string, sessionkey: string) {
    return this.httpClient.post<{ message: string }>(API_ORDER_TEMP + 'update-session-key/' + tranId + '/' + sessionkey, {});
  }



  getAllOrdersByUser(pagination?: Pagination, select?: string) {
    let params = new HttpParams();

    if (pagination) {
      params = params.append('pageSize', pagination.pageSize);
      params = params.append('page', pagination.currentPage);
      if (select) {
        params = params.append('select', select);
      }
      return this.httpClient.get<{ data: PrescriptionOrder[], count: number, message?: string }>
        (API_ORDER + 'get-all-orders-by-user', { params });
    } else {
      if (select) {
        params = params.append('select', select);
      }
      return this.httpClient.get<{ data: PrescriptionOrder[], count: number, message?: string }>
        (API_ORDER + 'get-all-orders-by-user', { params });
    }
  }

  getAllPrescriptionOrdersByUser(pagination?: Pagination, select?: string) {
    let params = new HttpParams();

    if (pagination) {
      params = params.append('pageSize', pagination.pageSize);
      params = params.append('page', pagination.currentPage);
      if (select) {
        params = params.append('select', select);
      }
      return this.httpClient.get<{ data: Order[], count: number, message?: string }>
        (API_ORDER_WEB + 'get-all-prescription-order-by-user', { params });
    } else {
      if (select) {
        params = params.append('select', select);
      }
      return this.httpClient.get<{ data: Order[], count: number, message?: string }>
        (API_ORDER_WEB + 'get-all-prescription-order-by-user', { params });
    }
  }


  getOrderDetails(orderId: string) {
    return this.httpClient.get<{ data: PrescriptionOrder, message?: string }>(API_ORDER + 'get-single-order-by-admin/' + orderId);
  }

  cancelOrderByUser(orderId: string) {
    return this.httpClient.put<{ message: string, success: boolean }>(API_ORDER + 'cancel-order-by-user/' + orderId, {});
  }

  deleteOrderByAdmin(orderId: string) {
    return this.httpClient.delete<{ message?: string, success: boolean }>(API_ORDER + 'delete-order-by-admin/' + orderId);
  }




  getAllTransactionByUser(pagination?: Pagination, select?: string) {
    let params = new HttpParams();

    if (pagination) {
      params = params.append('pageSize', pagination.pageSize);
      params = params.append('page', pagination.currentPage);
      if (select) {
        params = params.append('select', select);
      }
      return this.httpClient.get<{ data: Order[], count: number, message?: string }>
        (API_ORDER + 'get-all-transactions-by-user', { params });
    } else {
      if (select) {
        params = params.append('select', select);
      }
      return this.httpClient.get<{ data: Order[], count: number, message?: string }>
        (API_ORDER + 'get-all-transactions-by-user', { params });
    }
  }


  /**
   * ADMIN ACCESS
   */

  confirmPrescriptionOrderByAdmin(data: any) {
    // console.log(data)

    return this.httpClient.post<{ message?: string, orderId: any, success: boolean, status: any }>(confirmPrescriptionOrder, data)
  }

  cancelOrderByAdmin(orderId: string) {
    return this.httpClient.post<{ message?: string, orderId?: string, data?: any }>(cancelOrderByAdmin, { orderId })
  }


  getAllOrdersByAdmin(pagination?: Pagination, select?: string, query?: any) {
    let params = new HttpParams();

    if (pagination) {
      params = params.append('pageSize', pagination.pageSize);
      params = params.append('page', pagination.currentPage);
      if (select) {
        params = params.append('select', select);
      }
      return this.httpClient.get<{ data: PrescriptionOrder[], count: number, message?: string }>
        (API_ORDER + 'get-all-prescription-order-by-admin', { params });
    } else {
      if (select) {
        params = params.append('select', select);
      }
      return this.httpClient.get<{ data: PrescriptionOrder[], count: number, message?: string }>
        (API_ORDER + 'get-all-prescription-order-by-admin', { params });
    }
  }

  getAllOrdersByAdminNoPaginate() {
    return this.httpClient.get<{ data: Order[] }>(API_ORDER + 'get-all-orders-by-admin-no-paginate');
  }

  changeOrderStatus(data: any) {
    return this.httpClient.put<{ message: string }>(API_ORDER + 'change-order-status', data);
  }

  // router.get('/get-all-transaction-by-admin', checkAdminAuth, controller.getAllTransactionByAdmin);

  getAllTransactionByAdmin(pagination?: Pagination, select?: string) {
    let params = new HttpParams();

    if (pagination) {
      params = params.append('pageSize', pagination.pageSize);
      params = params.append('page', pagination.currentPage);
      if (select) {
        params = params.append('select', select);
      }
      return this.httpClient.get<{ data: Order[], count: number, message?: string }>
        (API_ORDER + 'get-all-transaction-by-admin', { params });
    } else {
      if (select) {
        params = params.append('select', select);
      }
      return this.httpClient.get<{ data: Order[], count: number, message?: string }>
        (API_ORDER + 'get-all-transaction-by-admin', { params });
    }
  }

  testSslSmsApi() {
    return this.httpClient.get<any>(API_ORDER + 'sent-test-ssl-message');
  }

  // router.get('/sent-test-ssl-message', controller.testSslSmsApi);

}
