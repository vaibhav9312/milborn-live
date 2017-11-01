import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import { HomepageService } from '../../../services/homepage.service'
import { serviceUrls } from '../../../common/serviceUrls';

@Component({
  selector: 'home-product-list',
  templateUrl: './home-product-list.component.html',
  styleUrls: ['./home-product-list.component.css',
  '../../../../assets/frontweb/css/bootstrap.min.css'
]
})
export class HomeProductListComponent implements OnInit {
prod:any[];
GroupList:any[];
  constructor(private http:Http,private _pmService:HomepageService,private route:ActivatedRoute) { }

  ngOnInit() {
   this._pmService.getGroupList().subscribe(result=>{
     this.GroupList=result;
    
   })
   
  }

}
