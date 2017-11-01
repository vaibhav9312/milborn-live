import { Injectable,EventEmitter,Output } from '@angular/core';
import { Http } from '@angular/http';
import { serviceUrls } from '../common/serviceUrls';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';

@Injectable()
export class AccountService {
  @Output() fire: EventEmitter<any> = new EventEmitter();
  constructor(private http: Http, private router:Router) { }

  doSignIn(body) {
    return this.http.post(serviceUrls.loginIn, body).map(res => res.json());
  }

  doLogout(){
      localStorage.removeItem("token");
      localStorage.removeItem("name");
      localStorage.removeItem("id");
      this.router.navigate(['/home/web']);

  }
  sessionFilter(a) {
    
     this.fire.emit(a);
   }
   getEmittedValue() {
    return this.fire;
  }

}
