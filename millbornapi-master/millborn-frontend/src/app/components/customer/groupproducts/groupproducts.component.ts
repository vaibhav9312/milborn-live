import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import { HomepageService } from '../../../services/homepage.service'
import { serviceUrls } from '../../../common/serviceUrls';

@Component({
  selector: 'app-groupproducts',
  templateUrl: './groupproducts.component.html',
  styleUrls: ['./groupproducts.component.css','../../../../assets/frontweb/css/bootstrap.min.css']
})
export class GroupproductsComponent implements OnInit {
  prod:any[];
  constructor(private http:Http,private _pmService:HomepageService,private route:ActivatedRoute) { }

  ngOnInit() {
    let id;
    this.route.params.subscribe(params => {
      id =params["id"];
      
      if (!(isNaN(id))) {
        this._pmService.getgroupprod(id).subscribe(result =>{
          this.prod = result;
          
         
        });
      }
      else{
        alert("Id is not valid");
      }
    });
  }
addtoCart(value){
  console.log(value);
}
}
