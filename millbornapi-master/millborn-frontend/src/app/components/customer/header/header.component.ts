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
rim:any[];
showme:boolean;
  constructor(public _homeServices : HomepageService) { }

  ngOnInit() {
    this._homeServices.getGroupList().subscribe(result => {
      this.data = result;
      this.getsublist(result);
     // this.data.unshift({GroupLink: '/home/web' ,Group:'Home'});
      //this.data.push({GroupLink:'/Contact',Group:'Contact US'});
     
    });
  }
 getsublist(dat){
   let dd:any[]=dat;
   let index: number=0;
   dd.forEach(element => {
     this._homeServices.getSubGroupList(element.GroupId).subscribe(result=>{
       if(this.data[index].GroupId===element.GroupId){
         this.data[index].Sub=result;
       }
       
       if(dd.length-1 === index) {
         
        this.getcate();
       }
            index++;
    });

   });
   
   }
 getcate(){
  
   let index:number=0;
   
   this.data.forEach(ele=>{
     ele.Sub.forEach(element => {
      this._homeServices.getCate(element.SubGroupId).subscribe(result=>{
       //console.log(result.SubGroupId+"/"+element.SubGroupId)
       
      element.Cate=result;
        
     });
     index++;
     });
   });
  
 }

}
