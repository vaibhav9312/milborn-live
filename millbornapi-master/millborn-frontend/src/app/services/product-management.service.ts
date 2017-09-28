import { Injectable } from '@angular/core';
import { AuthHttp } from 'angular2-jwt/angular2-jwt.js';
import 'rxjs/add/operator/map';
import { contentHeaders } from '../common/headers';
import { serviceUrls } from '../common/serviceUrls';

@Injectable()
export class ProductManagementService {

  constructor(private authHttp:AuthHttp) { }

  getproductlist(){
    //let sf = sortfield.split('-');
    return this.authHttp.get(serviceUrls.productlist, { headers: contentHeaders }).map(res => res.json());
  }

}
