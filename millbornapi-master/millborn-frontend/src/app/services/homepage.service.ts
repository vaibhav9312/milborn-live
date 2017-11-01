import { Injectable,EventEmitter,Output } from '@angular/core';
import { AuthHttp } from 'angular2-jwt/angular2-jwt.js';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { contentHeaders } from '../common/headers';
import { serviceUrls } from '../common/serviceUrls';

@Injectable()
export class HomepageService {
  @Output() fire: EventEmitter<any> = new EventEmitter();
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
 filterSubcategory(a) {
  
   this.fire.emit(a);
 }
 getEmittedValue() {
  return this.fire;
}
getallprod(){
  return this.http.get(serviceUrls.getallproducts,{headers:contentHeaders}).map(res=>res.json());
}
getClientType(){
  return this.http.get(serviceUrls.clienttypelist,{headers:contentHeaders}).map(res=>res.json());
}
getmainItem(a){
  return this.http.get(serviceUrls.mainItem+"?id="+a,{headers:contentHeaders}).map(res=>res.json());
}
getProd(a){
  return this.http.get(serviceUrls.Product+"?id="+a,{headers:contentHeaders}).map(res=>res.json());
}
getsearchList(){
  return this.http.get(serviceUrls.searchList,{headers:contentHeaders}).map(res=>res.json());
}
getgroupprod(id){
  return this.http.get(serviceUrls.groupproducts+"?id="+id,{headers:contentHeaders}).map(res=>res.json());
}
getBanners(){
  return this.http.get(serviceUrls.getbanner,{headers:contentHeaders}).map(res=>res.json());
}

}
