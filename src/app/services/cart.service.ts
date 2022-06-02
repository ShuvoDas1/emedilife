import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Cart } from '../interfaces/cart';
import { DATABASE_KEY } from '../core/utils/global-variable';
import { ReloadService } from './reload.service';
import { UiService } from './ui.service';


const API_CART = environment.apiBaseLink + '/api/cart/';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(
    private httpClient: HttpClient,
    private reloadService: ReloadService,
    private uiService: UiService,
  ) {
  }


  /**
   * CART WITH DB
   */
  addItemToUserCart(data: Cart) {
    return this.httpClient.post<{ message: string }>(API_CART + 'add-to-cart', data);
  }

  getCartItemList() {
    return this.httpClient.get<{ data: Cart[], message: string }>(API_CART + 'get-cart-items-by-user');
  }



  incrementCartQuantity(cartId: string) {
    return this.httpClient.post<{ message: string }>(API_CART + 'increment-cart-item-quantity', { cartId });
  }

  decrementCartQuantity(cartId: string) {
    return this.httpClient.post<{ message: string }>(API_CART + 'decrement-cart-item-quantity', { cartId });
  }

  removeCartItem(product: string) {
    console.log(product);
    return this.httpClient.delete<{ message: string }>(API_CART + 'remove-cart-item/' + product);
  }

  countCartItem() {
    return this.httpClient.get<{ data: number }>(API_CART + 'cart-item-count');
  }

  getCartStatusOnBook(bookId: string) {
    return this.httpClient.get<{ data: any }>(API_CART + 'get-status-book-on-cart/' + bookId);
  }

  syncLocalCartItems() {
    const items: Cart[] = this.getCartItemFromLocalStorage();
    if (items.length > 0) {
      let i = 0;
      items.forEach((d: Cart) => {
        this.addItemToUserCart(d).subscribe(() => {
          i += 1;
          if (i === items.length) {
            this.reloadService.needRefreshCart$();
            this.deleteAllCartFromLocal();
          }
        });
      });
    }
  }


  /**
   * CART LOCAL STORAGE
   */
  addCartItemToLocalStorage(cartItem: Cart) {
    // console.log(product);
    const items = JSON.parse(localStorage.getItem(DATABASE_KEY.userCart));

    let carts;

    if (items === null) {
      carts = [];
      carts.push(cartItem);
    } else {
      carts = items;
      const fIndex = carts.findIndex((o) => o.product === cartItem.product && o.priceId === cartItem.priceId);
      if (fIndex === -1) {
        carts.push(cartItem);
      } else {
        this.uiService.warn('This variant already added in your cart');
      }
    }
    localStorage.setItem(DATABASE_KEY.userCart, JSON.stringify(carts));
  }

  getCartItemFromLocalStorage(): Cart[] {
    const carts = localStorage.getItem(DATABASE_KEY.userCart);
    if (carts === null) {
      return [];
    }
    return JSON.parse(carts) as Cart[];
  }

  deleteCartItemFromLocalStorage(id: string, priceId?: string) {
    // console.log("id:", id, "priceId:", typeof priceId);
    const items = JSON.parse(localStorage.getItem(DATABASE_KEY.userCart));
    // console.log("items:", items)
    const filtered = items.filter(el => (el.product === id || el.product !== id) && el.priceId !== priceId);
    console.log("filtered", filtered);
    localStorage.setItem(DATABASE_KEY.userCart, JSON.stringify(filtered));
  }

  deleteAllCartFromLocal() {
    localStorage.removeItem(DATABASE_KEY.userCart);
    this.reloadService.needRefreshCart$();
  }


}
