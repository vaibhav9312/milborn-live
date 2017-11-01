import { Component, OnInit,OnChanges } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import { HomepageService } from '../../../services/homepage.service'
import { serviceUrls } from '../../../common/serviceUrls';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css',
  '../../../../assets/frontweb/css/bootstrap.min.css']
})
export class ProductDetailComponent implements OnInit {
prod:any;
mqty:number;
cart:any=new Array;
  constructor(private http:Http,private _pmService:HomepageService,private route:ActivatedRoute) { }

  ngOnInit() {
    let id;
    this.route.params.subscribe(params => {
      id =params["id"];
      if (!(isNaN(id))) {
        this._pmService.getProd(id).subscribe(result =>{
          this.prod = result[0];
          this.mqty=this.prod.MinimumQty;
          console.log(this.prod);
        });
      }
      else{
        alert("Id is not valid");
      }
    });
  }
  Add(){
    this.prod.MinimumQty++;
  }
  Sub(){
    if(this.prod.MinimumQty>this.mqty)
    this.prod.MinimumQty--;
    else
    alert("Quantity could not be less than Minimum Quantity!");
  }

  checkQty(a){
    if(a<this.mqty)
    alert("Quantity could not be less than Minimum Quantity!");
  }
  addCart(){
    if(!localStorage.getItem('cart')){
      this.prod.Min=this.mqty;
      this.cart.push(this.prod);
       localStorage.setItem('cart',JSON.stringify(this.cart));
       
    }
    else{
      this.cart=JSON.parse(localStorage.getItem('cart'));
      this.cart.forEach(element => {
        if(this.prod.ProductId==element.ProductId){
          console.log('already in cart');
          console.log(this.cart);
        }else{
          this.prod.Min=this.mqty;
           this.cart.push(this.prod);
        localStorage.setItem('cart',JSON.stringify(this.cart));
        }  
      });
      
    
    }

  }
}
