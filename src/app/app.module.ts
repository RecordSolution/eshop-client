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
import {ProductDetailsPage} from "./../pages/buyer/product-details/product-details"
import { ProfileStore } from "./../store/profileStore";
import { CustomDesignPage } from '../pages/buyer/custom-design/custom-design';
import { SharedProvider } from '../providers/shared/shared';
@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    SignupPage,
    CategoriesPage,
    MenPage,
    ProductDetailsPage,
    CustomDesignPage
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
    MenPage,
    ProductDetailsPage,
    CustomDesignPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MembershipProvider,
    ProductsProvider,
    ProfileStore,
    SharedProvider
  ]
})
export class AppModule {}
