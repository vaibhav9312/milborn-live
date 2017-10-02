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

  constructor(private http:Http,private _pmService:HomepageService,private route:ActivatedRoute) { }

  ngOnInit() {
    let id;
    this.route.params.subscribe(params => {
      id =params["id"];
      console.log(id);
      if (!(isNaN(id))) {
        this._pmService.getsubProd(id).subscribe(result =>{
          this.prod = result;
          
        });
      }
      else{
        alert("Id is not valid");
      }
    });
  }

}
