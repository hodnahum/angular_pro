import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {ProductsSche } from './schema/product.model';
@Injectable({
  providedIn: 'root'
})
export class ProService {
  api_product_url = 'http://localhost:3000/products';
 // _http: any;


  constructor(private _http: HttpClient) { }
  getProducts() {
    return this._http.get<ProductsSche[]>(this.api_product_url);
  }
  postProducts(data: any){
    this._http.post(this.api_product_url,data);
    console.warn(data);
  }
/*   clearContact(data: any){
    this._http.patch(this.api_contact_url, data);
  }
 */


}
