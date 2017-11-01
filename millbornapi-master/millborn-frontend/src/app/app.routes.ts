import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './common/auth.guard';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


import { HeaderComponent } from './components/customer/header/header.component';
import { BarContainerComponent } from './components/customer/bar-container/bar-container.component';
import { HomeComponent } from './components/customer/home/home.component';
import { CategoryListSubgroupComponent } from './components/customer/category-list-subgroup/category-list-subgroup.component';
import { CategoryListCateComponent } from './components/customer/category-list-cate/category-list-cate.component';
import { HomeCategoryListComponent } from './components/customer/home-category-list/home-category-list.component';
import { SubgroupproductscomponentComponent } from './components/customer/subgroupproductscomponent/subgroupproductscomponent.component'
import { HomeProductListComponent } from './components/customer/home-product-list/home-product-list.component'
import { CategoryproductComponent } from './components/customer/categoryproduct/categoryproduct.component'
import { LoginComponent } from './components/customer/login/login.component';
import { CreateAccountComponent } from './components/customer/create-account/create-account.component';
import { ProductDetailComponent } from './components/customer/product-detail/product-detail.component'
import { ProfileComponent } from './components/customer/profile/profile.component';
import { CartComponent } from './components/customer/cart/cart.component';
import { GroupproductsComponent } from './components/customer/groupproducts/groupproducts.component';



const routes: Routes = [
  {
    path:'home',
  component:BarContainerComponent,
  children:[
    {path:'',redirectTo:'web',pathMatch:'full'},
    {path:'web',
    component: HomeComponent,
  children:[
    {path:'' ,component:HomeCategoryListComponent,outlet:'category'},
    {path:'',component:HomeProductListComponent,outlet:'product'}
  ]
  },
  {
    path:'sub/:id',
    component:HomeComponent,
  children:[
    {path:'',component:CategoryListSubgroupComponent,outlet:'category'},
  {path:'',component:SubgroupproductscomponentComponent,outlet:'product'}
  ]
},
{
  path:'cate/:id',
  component:HomeComponent,
children:[
  {path:'',component:CategoryListCateComponent,outlet:'category'},
{path:'',component:CategoryproductComponent,outlet:'product'}
]
},
{
  path:'group/:id',
  component:HomeComponent,
children:[
  // {path:'',component:CategoryListCateComponent,outlet:'category'},
{path:'',component:GroupproductsComponent,outlet:'product'}
]
},
{
  path:'login',
  component:HomeComponent,
  children:[
    {path:'',component:LoginComponent,outlet:'category'}
  ]
},
{
  path:'create',
  component:HomeComponent,
  children:[
    {path:'',component:CreateAccountComponent,outlet:'category'}
  ]
},
{
  path:'product/:id',
  component:HomeComponent,
  children:[
    {path:'',component:ProductDetailComponent,outlet:'category'}
  ]
},
{
  path:'account/:id',
  component:HomeComponent,
  children:[
    {path:'',component:ProfileComponent,outlet:'category'}
  ]
},
{
  path :'cart',
  component:HomeComponent,
  children:[
    {path:'',component:CartComponent,outlet:'category'}
  ]
}

  ]
},
  
  
  
 {path:'',redirectTo:'home',pathMatch:'full'},
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: false
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }