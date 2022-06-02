import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getHeaderMenu } from './../../utils/url';

@Injectable({
  providedIn: 'root'
})
export class HeaderMenuService {

  constructor(private http: HttpClient) {

  }

  getHeaderMenu = () => {
    return this.http.get<{ data?: any }>(getHeaderMenu);

  }
}
