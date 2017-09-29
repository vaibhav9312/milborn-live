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
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SharedModule } from "./components/shared/shared.module";
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';

import { SigninComponent } from './components/signin/signin.component';
import { AppContainerComponent } from './components/app-container/app-container.component';

import { AccountService } from './services/account.service';
import { ClientManagementService } from './services/client-management.service';
import { ProductManagementService } from './services/product-management.service';
import { HomepageService } from './services/homepage.service';

import { ClientTypeComponent } from './components/client-type/client-type.component';
import { ConfirmDirective } from './directives/confirm.directive';
import { ClientRegistrationComponent } from './components/client-registration/client-registration.component';
import { ProductRegistrationComponent } from './components/product-registration/product-registration.component';
import { ClientListComponent } from './components/client-list/client-list.component';
import { ClientApprovalComponent } from './components/client-approval/client-approval.component';
import { ProductListComponent } from './components/product-list/product-list.component';
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
    AppContainerComponent,
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    DashboardComponent,
    SigninComponent,
    PageNotFoundComponent,
    ClientTypeComponent,
    ConfirmDirective,
    ClientRegistrationComponent,
    ProductRegistrationComponent,
    ClientListComponent,
    ClientApprovalComponent,
    ProductListComponent,
    HeaderComponent,
    HomeComponent,
    HomeCategoryListComponent,
    HomeClientListComponent,
    HomeProductListComponent,
    BarContainerComponent,
    FooterComponent,
    ToggleDirective,
    CategoryListSubgroupComponent,
    CategoryListCateComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    SharedModule,
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
