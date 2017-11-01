import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, Http, RequestOptions } from '@angular/http';
import { AppRoutingModule } from './app.routes';
import { AuthGuard } from './common/auth.guard';
import { AuthHttp, AuthConfig, AUTH_PROVIDERS, provideAuth } from 'angular2-jwt/angular2-jwt.js';
import { CKEditorModule } from 'ng2-ckeditor';
import { SharedFileUploadModule } from './modules/app.fileupload.module';


import { AppComponent } from './app.component';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';


import { AccountService } from './services/account.service';
import { ClientManagementService } from './services/client-management.service';
import { ProductManagementService } from './services/product-management.service';
import { HomepageService } from './services/homepage.service';

import { ConfirmDirective } from './directives/confirm.directive';

import { HeaderComponent } from './components/customer/header/header.component';
import { HomeComponent } from './components/customer/home/home.component';
import { HomeCategoryListComponent } from './components/customer/home-category-list/home-category-list.component';
import { HomeClientListComponent } from './components/customer/home-client-list/home-client-list.component';
import { HomeProductListComponent } from './components/customer/home-product-list/home-product-list.component';
import { BarContainerComponent } from './components/customer/bar-container/bar-container.component';
import { FooterComponent } from './components/customer/footer/footer.component';
import { ToggleDirective } from './directives/toggle.directive';
import { CategoryListSubgroupComponent } from './components/customer/category-list-subgroup/category-list-subgroup.component';
import { CategoryListCateComponent } from './components/customer/category-list-cate/category-list-cate.component';
import { SubgroupproductscomponentComponent } from './components/customer/subgroupproductscomponent/subgroupproductscomponent.component';
import { CategoryproductComponent } from './components/customer/categoryproduct/categoryproduct.component';
import { LoginComponent } from './components/customer/login/login.component';
import { CreateAccountComponent } from './components/customer/create-account/create-account.component';
import { ProductDetailComponent } from './components/customer/product-detail/product-detail.component';
import { ProfileComponent } from './components/customer/profile/profile.component';
import { CartComponent } from './components/customer/cart/cart.component';
import { FilterPipe} from './common/filter.pipe';
import { GroupproductsComponent } from './components/customer/groupproducts/groupproducts.component';



export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({
    tokenName: 'token',
    headerName:'Authorization',
    headerPrefix :'',
    noTokenScheme:true,
		tokenGetter: (() => localStorage.getItem('token')),
		globalHeaders: [{'Content-Type':'application/json'}],
	}), http, options);
}


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ConfirmDirective,
    HeaderComponent,
    HomeComponent,
    HomeCategoryListComponent,
    HomeClientListComponent,
    HomeProductListComponent,
    BarContainerComponent,
    FooterComponent,
    ToggleDirective,
    CategoryListSubgroupComponent,
    CategoryListCateComponent,
    SubgroupproductscomponentComponent,
    CategoryproductComponent,
    LoginComponent,
    CreateAccountComponent,
    ProductDetailComponent,
    ProfileComponent,
    CartComponent,
    FilterPipe,
    GroupproductsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MultiselectDropdownModule,
    CKEditorModule,
    SharedFileUploadModule,
   
  ],
  providers: [AccountService,ClientManagementService,HomepageService,ProductManagementService, AuthGuard, AuthHttp, {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
