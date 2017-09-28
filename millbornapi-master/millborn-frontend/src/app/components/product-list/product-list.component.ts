import { Component, OnInit } from '@angular/core';
import { ProductManagementService } from '../../services/product-management.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  pageCount: Number = 10;
  currentPage: Number = 1;
  searchTerm: String = "";
  sortField: String = "ModifiedAt-DESC";
  paginationshowcount: any[];
  dataList: any[];
  doctorDetail : any;

  constructor(public _productServices : ProductManagementService) { }

  ngOnInit() {
    this.getData("", this.pageCount, 0, this.sortField);
  }

  

  onPageCountChange() {
    let pscs = Math.ceil(this.dataList.length / (Number)(this.pageCount));
    if(pscs < this.currentPage)
      this.currentPage = 1;

    this.getData(this.searchTerm, this.pageCount, this.currentPage === 1 ? 0 : (Number(this.currentPage) * Number(this.pageCount)), this.sortField);
  }

  getData(search, pagecount, skip, sortField) {
    this._productServices.getproductlist().subscribe(result => {
      this.dataList = result;
     
     // let pscs = Math.ceil(result.count / (Number)(this.pageCount));
     // this.paginationshowcount = Array.from(Array(pscs), (x, i) => i + 1);
    });
  }

  doPrevious() {
    if (this.currentPage != 1) {
      this.getData(this.searchTerm, this.pageCount, this.currentPage === 1 ? 0 : (Number((Number)(this.currentPage) - 2) * Number(this.pageCount)), this.sortField);
      this.currentPage = (Number)(this.currentPage) - 1;
    }
  }

  doNext() {
    if (this.currentPage != this.paginationshowcount[this.paginationshowcount.length - 1]) {
      this.getData(this.searchTerm, this.pageCount, (Number(this.currentPage) * Number(this.pageCount)), this.sortField);
      this.currentPage = (Number)(this.currentPage) + 1;
    }
  }

  doChangePage(pnum) {
    this.getData(this.searchTerm, this.pageCount, ((pnum - 1) * Number(this.pageCount)), this.sortField);
    this.currentPage = pnum;
  }

  doChangeSort(sortfield) {
    let sf = this.sortField.split('-');
    if (sortfield == sf[0]) {
      if (sf[1] == "asc") {
        this.sortField = sortfield + "-desc";
      }
      else {
        this.sortField = sortfield + "-asc";
      }
    }
    else {
      this.sortField = sortfield + "-asc";
    }

    this.getData(this.searchTerm, this.pageCount, this.currentPage === 1 ? 0 : (Number((Number)(this.currentPage) - 1) * Number(this.pageCount)), this.sortField);

  }
}
