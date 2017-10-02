import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import { HomepageService } from '../../../services/homepage.service'
import { serviceUrls } from '../../../common/serviceUrls';
@Component({
  selector: 'app-categoryproduct',
  templateUrl: './categoryproduct.component.html',
  styleUrls: ['./categoryproduct.component.css',
  '../../../../assets/frontweb/css/bootstrap.min.css']
})
export class CategoryproductComponent implements OnInit {
prod:any[];
  constructor(private http:Http,private _pmService:HomepageService,private route:ActivatedRoute) { }

  ngOnInit() {
    let id;
    this.route.params.subscribe(params => {
      id =params["id"];
      
      if (!(isNaN(id))) {
        this._pmService.getcateprod(id).subscribe(result =>{
          this.prod = result;
          console.log(this.prod);
        });
      }
      else{
        alert("Id is not valid");
      }
    });
  }

}
