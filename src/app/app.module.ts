import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { LoginPage } from "./../pages/membership/login/login";
import {CategoriesPage  } from "./../pages/buyer/categories/categories";
import { SignupPage } from '../pages/membership/signup/signup';
import { MenPage } from "./../pages/buyer/men/men";
import { MembershipProvider } from '../providers/membership/membership';
import { ProductsProvider } from '../providers/products/products';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { OrdersProvider} from '../providers/orders/orders';
import { OrderStore } from '../store/orders/orderstore';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    SignupPage,
    CategoriesPage,
    MenPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    SignupPage,
    CategoriesPage,
    MenPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MembershipProvider,
    ProductsProvider,
    OrdersProvider,
    OrderStore


  ]
})
export class AppModule {}
