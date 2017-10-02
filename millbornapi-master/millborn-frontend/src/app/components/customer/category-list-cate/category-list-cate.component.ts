import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import { HomepageService } from '../../../services/homepage.service'
import { serviceUrls } from '../../../common/serviceUrls';
@Component({
  selector: 'app-category-list-cate',
  templateUrl: './category-list-cate.component.html',
  styleUrls: ['./category-list-cate.component.css',
  '../../../../assets/frontweb/css/bootstrap.min.css']
})
export class CategoryListCateComponent implements OnInit {
subcate:any[];
  constructor(private http:Http,private _pmService:HomepageService,private route:ActivatedRoute) { }

  ngOnInit() {
    let id;
    this.route.params.subscribe(params => {
      id =params["id"];
      if (!(isNaN(id))) {
        this._pmService.getSubCate(id).subscribe(result =>{
          this.subcate=result ;
         
        });
      }
      else{
        alert("Id is not valid");
      }
    });
  }

}
