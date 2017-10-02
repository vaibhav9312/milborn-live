import { Injectable } from '@angular/core';
import { AuthHttp } from 'angular2-jwt/angular2-jwt.js';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { contentHeaders } from '../common/headers';
import { serviceUrls } from '../common/serviceUrls';

@Injectable()
export class HomepageService {

  constructor(private http:Http,private authHttp:AuthHttp) { }
 getCate(q){

  return this.http.get(serviceUrls.Catelist+"?id="+q, { headers: contentHeaders }).map(res => res.json());
 }
 getGroupList(){
   return this.http.get(serviceUrls.GroupList,{headers:contentHeaders}).map(res=>res.json());
 }
 getSubGroupList(a){
   return this.http.get(serviceUrls.SubGroup+"?id="+a,{headers: contentHeaders}).map(res=>res.json());
 }
 getsubProd(a){
   return this.http.get(serviceUrls.subproductList+"?id="+a,{headers:contentHeaders}).map(res=>res.json());
 }
 getSubCate(a){
   return this.http.get(serviceUrls.getsubcate+"?id="+a,{headers:contentHeaders}).map(res=>res.json());
 }
 getcateprod(a){
   return this.http.get(serviceUrls.getcateProducts+"?id="+a,{headers:contentHeaders}).map(res=>res.json());
 }
}
