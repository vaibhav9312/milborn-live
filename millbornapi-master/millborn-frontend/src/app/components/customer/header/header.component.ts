import { Component, OnInit } from '@angular/core';
import { HomepageService } from '../../../services/homepage.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles:[
   ' @import "http://fonts.googleapis.com/css?family=Roboto:300,400,500,700";@import "https://fonts.googleapis.com/css?family=Open+Sans:400,300,400italic,600,600italic,700,700italic,800";@import "https://fonts.googleapis.com/css?family=Montserrat:300,400,500,500i,600,700,800,900";'
  ],
  styleUrls: [
'../../../../assets/frontweb/css/bootstrap.min.css',
'../../../../assets/frontweb/css/main.css',
'../../../../assets/frontweb/css/blue.css',
'../../../../assets/frontweb/css/simple-line-icons.css',
'../../../../assets/frontweb/css/owl.carousel.css',
'../../../../assets/frontweb/css/owl.transitions.css',
'../../../../assets/frontweb/css/animate.min.css',
'../../../../assets/frontweb/css/rateit.css',
'../../../../assets/frontweb/css/bootstrap-select.min.css',
'../../../../assets/frontweb/css/font-awesome.css'
]
})
export class HeaderComponent implements OnInit {
data:any[];

showme:boolean;
  constructor(public _homeServices : HomepageService) { }

  ngOnInit() {
    this._homeServices.getGroupList().subscribe(result => {
      this.data = result;
      this.getsublist(this.data);
      this.data.unshift({GroupLink: '/home/web' ,Group:'Home'});
      this.data.push({GroupLink:'/Contact',Group:'Contact US'});
     
    });
  }
 getsublist(dat){
  for(let i=0;i>dat.length;i++){
    if(dat[i].GroupId){
      this._homeServices.getSubGroupList(dat[i].GroupId).subscribe(result=>{
        
             });
    }
   
   }
  }
 

}
