// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import {MatFormFieldModule} from '@angular/material/form-field';
// import {MatInputModule} from '@angular/material/input';
// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { LoginComponent } from './components/login/login.component';
// import { SignupComponent } from './components/signup/signup.component';
// import { FormsModule,ReactiveFormsModule } from '@angular/forms';
// import { HttpClientModule } from '@angular/common/http';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { HeaderComponent } from './components/header/header.component';
// import { FooterComponent } from './components/footer/footer.component';
// import { DashboardComponent } from './components/dashboard/dashboard.component';
// import {MatSelectModule} from '@angular/material/select';
// import { GetbookComponent } from './components/getbook/getbook.component';
// import { CartComponent } from './components/cart/cart.component';
// import { OpenBookComponent } from './components/open-book/open-book.component';
// import { OrderComponent } from './components/order/order.component';
// import { MatRadioModule } from '@angular/material/radio';
// import { WishlistComponent } from './components/wishlist/wishlist.component';
// import { MatIconModule } from '@angular/material/icon'
// @NgModule({
//   declarations: [
//     AppComponent,
//     LoginComponent,
//     SignupComponent,
//     HeaderComponent,
//     FooterComponent,
//     DashboardComponent,
//     GetbookComponent,
//     CartComponent,
//     OpenBookComponent,
//     OrderComponent,
//     WishlistComponent,
    
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     MatFormFieldModule,
//     MatInputModule,
//     FormsModule,
//     ReactiveFormsModule,
//     HttpClientModule,
//     BrowserAnimationsModule, 
//     MatSelectModule,
//     MatRadioModule,
//     MatIconModule,

//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }



import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { GetbookComponent } from './components/getbook/getbook.component';
import {MatSelectModule} from '@angular/material/select';
import { HeaderComponent } from './components/header/header.component';
import { OpenBookComponent } from './components/open-book/open-book.component';
import { CartComponent } from './components/cart/cart.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import {MatRadioModule} from '@angular/material/radio';
import { OrderComponent } from './components/order/order.component';

import { MatPaginatorModule } from '@angular/material/paginator';
import { NgxPaginationModule } from 'ngx-pagination';

import { FooterComponent } from './components/footer/footer.component';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FilterPipe } from './filter.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HomeComponent } from './home/home.component';
import {AuthguardService} from './authguard.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    GetbookComponent,
    HeaderComponent,
    OpenBookComponent,
    CartComponent,
    WishlistComponent,
    OrderComponent,
   
    FooterComponent,
    FilterPipe,
    HomeComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    HttpClientModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatSelectModule,
    MatRadioModule,
    MatPaginatorModule,
    NgxPaginationModule,
    MatBadgeModule,
    MatSnackBarModule,
    Ng2SearchPipeModule,

  ],
  providers: [AuthguardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
