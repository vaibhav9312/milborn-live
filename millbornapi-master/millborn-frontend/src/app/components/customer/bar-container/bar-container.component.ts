import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-container',
  templateUrl: './bar-container.component.html',
  styles:[
    ' @import "http://fonts.googleapis.com/css?family=Roboto:300,400,500,700";@import "https://fonts.googleapis.com/css?family=Open+Sans:400,300,400italic,600,600italic,700,700italic,800";@import "https://fonts.googleapis.com/css?family=Montserrat:300,400,500,500i,600,700,800,900";'
   ],
  styleUrls:[
    '../../../../assets/frontweb/css/bootstrap.min.css'
  ]
})
export class BarContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
