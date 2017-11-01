import { Injectable } from '@angular/core';
import { AuthHttp } from 'angular2-jwt/angular2-jwt.js';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { contentHeaders } from '../common/headers';
import { serviceUrls } from '../common/serviceUrls';

@Injectable()
export class ClientManagementService {

  constructor(private http:Http,private authHttp: AuthHttp) { }

  getClientTypeList() {
    return this.http.get(serviceUrls.clienttypelist, { headers: contentHeaders }).map(res => res.json());
  }

  clientTypeCreate(body: any) {
    return this.http.post(serviceUrls.clienttypecreate, body, { headers: contentHeaders }).map(res => res.json());
  }

  deleteClientType(id) {
    return this.http.delete(serviceUrls.clienttypedelete + id, { headers: contentHeaders }).map(res => res.json());
  }

  updateClientType(id, body) {
    return this.http.put(serviceUrls.clienttypeupdate + id, body, { headers: contentHeaders }).map(res => res.json());
  }

  getCountries() {
    return this.http.get(serviceUrls.countryList).map(res => res.json());
  }

  getStateByCountry(id) {
    return this.http.get(serviceUrls.stateByCountryId + id).map(res => res.json());
  }

  getCityByState(id) {
    return this.http.get(serviceUrls.cityByStateId + id).map(res => res.json());
  }

  getMainItemListByClientType(id){
    return this.http.get(serviceUrls.mainItemListByClientType + id).map(res => res.json());
  }

  createClient(body){
    return this.http.post(serviceUrls.clientCreate,body).map(res => res.json());
  }

  getClientList(search = "", pagecount: Number = 10, skip: Number = 0, sortfield) {
    let sf = sortfield.split('-');
    return this.http.get(serviceUrls.clientlist + "?searchField=" + search + "&limit=" + pagecount + "&skip=" + skip + "&sortField=" + sf[0] + "&sortOrder=" + sf[1], { headers: contentHeaders }).map(res => res.json());
  }

  getClientDetails(id:Number){
    return this.http.get(serviceUrls.clientDetails + id).map(res => res.json());
  }

}
