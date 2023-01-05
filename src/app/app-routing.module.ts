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

const routes: Routes = [
  {path:'signin', component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'header',component:HeaderComponent},
  {path:'footer',component:FooterComponent},
  {path:'Dashboard', component:DashboardComponent},
  {path:'getbook',component:GetbookComponent},
  {path:'cart',component:CartComponent},
  {path:'order',component:OrderComponent},
  {path:'open-book',component:OpenBookComponent},
  {path:'wishlist',component:WishlistComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
