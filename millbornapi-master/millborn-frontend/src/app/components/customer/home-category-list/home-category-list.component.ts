import { Component, OnInit } from '@angular/core';
import { HomepageService } from '../../../services/homepage.service'
@Component({
  selector: 'home-category-list',
  templateUrl: './home-category-list.component.html',
  styleUrls: ['./home-category-list.component.css',
    '../../../../assets/frontweb/css/bootstrap.min.css'
  ]
})
export class HomeCategoryListComponent implements OnInit {
 data:any[];
 banner:any[];
  constructor(public _homeServices : HomepageService) { }

  ngOnInit() {
    this._homeServices.getBanners().subscribe(result=>{
      this.banner=result;
      console.log(this.banner);
    })
   // this.getlist();
  }

  // getlist(){
    
  //   this._homeServices.getCate().subscribe(result => {
  //     this.data = result;
  //   });
  // }

}
