import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import { HomepageService } from '../../../services/homepage.service'
import { serviceUrls } from '../../../common/serviceUrls';

@Component({
  selector: 'app-subgroupproductscomponent',
  templateUrl: './subgroupproductscomponent.component.html',
  styleUrls: ['./subgroupproductscomponent.component.css',
  '../../../../assets/frontweb/css/bootstrap.min.css']
})
export class SubgroupproductscomponentComponent implements OnInit {
prod:any[];
filt:any[];
filtid:any;
  constructor(private http:Http,private _pmService:HomepageService,private route:ActivatedRoute) { }

  ngOnInit() {
    let id;
    this.route.params.subscribe(params => {
      id =params["id"];
      if (!(isNaN(id))) {
        this._pmService.getsubProd(id).subscribe(result =>{
          this.prod = result;
          this.filt=result;
         
        });
      }
      else{
        alert("Id is not valid");
      }
    });
    this._pmService.getEmittedValue()
    .subscribe(item => this.filter(this.filtid=item));
  }
  filter(a){
    this.prod=[];
    this.filt.forEach(element => {
      if(element.SubCategoryId===a){
        this.prod.push(element);

      }     
     
    });
  }

}
