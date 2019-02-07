import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { LoginPage } from "./../pages/membership/login/login";
import { CategoriesPage } from "./../pages/buyer/categories/categories";
import { SignupPage } from '../pages/membership/signup/signup';
import { MenPage } from "./../pages/buyer/men/men";
import { MembershipProvider } from '../providers/membership/membership';
import { ProductsProvider } from '../providers/products/products';
import { HttpClientModule } from '@angular/common/http';
import { OrdersProvider } from '../providers/orders/orders';
import { OrderStore } from '../store/orders/orderstore';
import { ProductDetailsPage } from "./../pages/buyer/product-details/product-details"
import { ProfileStore } from "../store/profilestore/profileStore";
import { CustomDesignHomePage } from '../pages/buyer/customDesign/custom-design/custom-design-home';
import { SharedProvider } from '../providers/shared/shared';
import { AdmindashboardPage } from '../pages/admin/admindashboard/admindashboard';
import { OrderDetailsPage } from '../pages/admin/order-details/order-details';
// import { ColorPickerModule } from 'ngx-color-picker';
import { DesignCanvasPage } from "./../pages/buyer/customDesign/design-canvas/design-canvas";
// import { ScreenOrientation } from "@ionic-native/screen-orientation";
import { DragableDirective } from "./../directives/dragable/dragable";
@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    SignupPage,
    CategoriesPage,
    MenPage,
    ProductDetailsPage,
    CustomDesignHomePage,
    AdmindashboardPage,
    OrderDetailsPage,
    DesignCanvasPage,
    DragableDirective
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    // ColorPickerModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    SignupPage,
    CategoriesPage,
    MenPage,
    ProductDetailsPage,
    CustomDesignHomePage,
    AdmindashboardPage,
    OrderDetailsPage,
    DesignCanvasPage
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    MembershipProvider,
    ProductsProvider,
    OrdersProvider,
    OrderStore,
    ProfileStore,
    SharedProvider,
    // ScreenOrientation
    
  ]
})
export class AppModule { }
