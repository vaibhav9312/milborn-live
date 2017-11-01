import { Component, OnInit } from '@angular/core';
import { HomepageService } from '../../../services/homepage.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { AccountService } from '../../../services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles:[
    ' @import "http://fonts.googleapis.com/css?family=Roboto:300,400,500,700";@import "https://fonts.googleapis.com/css?family=Open+Sans:400,300,400italic,600,600italic,700,700italic,800";@import "https://fonts.googleapis.com/css?family=Montserrat:300,400,500,500i,600,700,800,900";'
   ],
   styleUrls:[
    '../../../../assets/frontweb/css/bootstrap.min.css'
  ]
})
export class LoginComponent implements OnInit {
  signIn: FormGroup;
  
    constructor(private fb: FormBuilder, private _accountServices: AccountService, private router: Router) { }
  
    ngOnInit() {
      this.signIn = this.fb.group({
        username: ["", Validators.required],
        password: ["", Validators.required]
      });
    }
  
    doSignIn(event) {
      this._accountServices.doSignIn(this.signIn.value).subscribe(result => {
        if (result.success) {
          localStorage.setItem('token', result.token);
          localStorage.setItem('name',result.fullname);
          localStorage.setItem('client',result.id);
          this._accountServices.sessionFilter(result);
          this.router.navigate(['/home/web']);
        }
        else {
          alert("unable to login");
        }
      });
  
    }
  
}
