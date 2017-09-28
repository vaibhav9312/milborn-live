import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { IMultiSelectOption, IMultiSelectSettings, IMultiSelectTexts } from 'angular-2-dropdown-multiselect';
import { FileUploader } from 'ng2-file-upload';

// const URL = '/api/';
const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';

@Component({
  selector: 'app-product-registration',
  templateUrl: './product-registration.component.html',
  styleUrls: ['./product-registration.component.css']
})
export class ProductRegistrationComponent implements OnInit {
  productreg: FormGroup;
  public uploader:FileUploader = new FileUploader({url: URL});

  // Settings configuration 
  mySettings: IMultiSelectSettings = {
    enableSearch: true,
    checkedStyle: 'fontawesome',
    buttonClasses: 'btn btn-default btn-block',
    dynamicTitleMaxItems: 3,
    displayAllSelectedText: true
  };

  // Text configuration 
  myTexts: IMultiSelectTexts = {
    checkAll: 'Select all',
    uncheckAll: 'Unselect all',
    checked: 'item selected',
    checkedPlural: 'items selected',
    searchPlaceholder: 'Find',
    defaultTitle: 'Select Category',
    allSelected: 'All selected',
  };

  // Labels / Parents 
  myOptions: IMultiSelectOption[] = [
    { id: 2, name: 'Volvo', parentId: 1 },
    { id: 3, name: 'Honda', parentId: 1 },
    { id: 4, name: 'BMW', parentId: 1 },
    { id: 6, name: 'Blue', parentId: 5 },
    { id: 7, name: 'Red', parentId: 5 },
    { id: 8, name: 'White', parentId: 5 }
  ];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.productreg = this.fb.group({
      ProductTitle : [""],
      CategoryList:[],
      ProductDetail : ["", Validators.required],
      Tags : ["", Validators.required],
      Price : ["",Validators.required],
      MinimumQuantity : ["", Validators.required]
    });
  }

  doRegisterProduct({value, valid}){
    debugger;
    let aa = this.uploader;
  }

}
