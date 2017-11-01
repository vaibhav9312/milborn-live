import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import { HomepageService } from '../../../services/homepage.service'
import { serviceUrls } from '../../../common/serviceUrls';

@Component({
  selector: 'app-category-list-subgroup',
  templateUrl: './category-list-subgroup.component.html',
  styleUrls: ['./category-list-subgroup.component.css',
  '../../../../assets/frontweb/css/bootstrap.min.css'
]
})
export class CategoryListSubgroupComponent implements OnInit {
cate :any[];
sub:any[];
  constructor(private http:Http,private _pmService:HomepageService,private route:ActivatedRoute) { }

  ngOnInit() {
    let id;
    this.route.params.subscribe(params => {
      id =params["id"];
      if (!(isNaN(id))) {
        this._pmService.getCate(id).subscribe(result =>{
          this.cate = result;
          
        });
      }
      else{
        alert("Id is not valid");
      }
    });
    
    
  }
  getsub(a){
    this._pmService.getSubCate(a).subscribe(result=>{
      this.sub=result;
     
    });
  }
  subcatefilter(a){
    this._pmService.filterSubcategory(a);
  }

}
