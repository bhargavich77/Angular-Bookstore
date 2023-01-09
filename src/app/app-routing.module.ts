import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FooterComponent } from './components/footer/footer.component';
import { GetbookComponent } from './components/getbook/getbook.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { OpenBookComponent } from './components/open-book/open-book.component';
import { OrderComponent } from './components/order/order.component';
import { SignupComponent } from './components/signup/signup.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { HomeComponent } from './home/home.component';
import {AuthenticationGuard} from './authentication.guard';
const routes: Routes = [
  
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {path:'',redirectTo:"/login",pathMatch:'full'},

  {path:'Dashboard',component:DashboardComponent  ,canActivate:[AuthenticationGuard],
  
children:[
  
  {path: 'Openbook', component: OpenBookComponent},
  {path:'cart',component:CartComponent},
  {path:'order',component:OrderComponent},
  {path:'wishlist',component:WishlistComponent}
]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
