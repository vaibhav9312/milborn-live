import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styles:[
    ' @import "http://fonts.googleapis.com/css?family=Roboto:300,400,500,700";@import "https://fonts.googleapis.com/css?family=Open+Sans:400,300,400italic,600,600italic,700,700italic,800";@import "https://fonts.googleapis.com/css?family=Montserrat:300,400,500,500i,600,700,800,900";'
   ],
  styleUrls: ['./cart.component.css',
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
export class CartComponent implements OnInit {
prodlist:any[];
total:number;
  constructor(private router:Router) { }

  ngOnInit() {
   if(!localStorage.getItem('cart')){
     alert('there are no item in cart');
   }
   else{
     this.prodlist=JSON.parse(localStorage.getItem('cart'));
     this.prodlist.forEach(element => {
       this.total=this.total+(element.MinimumQty*element.Price);
     });
   }
  }
Add(i){
  this.prodlist[i].MinimumQty++;
}
Sub(i){
  this.prodlist[i].MinimumQty--;
}
remove(i){
  this.prodlist.splice(i,1);
}

}
