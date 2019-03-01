import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
// import { SplashScreen } from '@ionic-native/splash-screen';
// import { StatusBar } from '@ionic-native/status-bar';
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
import { ProductStore } from '../store/productstore/productstore';
import { ProductDetailsPage } from "./../pages/buyer/product-details/product-details"
import { ProfileStore } from "../store/profilestore/profileStore";
import { CustomDesignHomePage } from '../pages/buyer/customDesign/custom-design/custom-design-home';
import { SharedProvider } from '../providers/shared/shared';
import { AdmindashboardPage } from '../pages/admin/admindashboard/admindashboard';
import { OrderDetailsPage } from '../pages/admin/order-details/order-details';
import { ColorPickerModule } from 'ngx-color-picker';
// import { ScreenOrientation } from "@ionic-native/screen-orientation";
import { AbsoluteDragDirective } from "./../directives/dragable/dragable";
import { LongPressModule } from 'ionic-long-press'
import { AngularDraggableModule } from 'angular2-draggable';
import { CustomFashionCategorySelectorComponent } from "./../components/custom-design/custom-fashion-category-selector/custom-fashion-category-selector";
import { CustomDressCategorySelectorComponent } from "./../components/custom-design/custom-dress-category-selector/custom-dress-category-selector";
import { CustomAssetsComponent } from "./../components/custom-design/custom-assets/custom-assets";
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
    AbsoluteDragDirective,
    CustomFashionCategorySelectorComponent,
    CustomDressCategorySelectorComponent,
    CustomAssetsComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    ColorPickerModule,
    AngularDraggableModule,
    LongPressModule

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
    CustomFashionCategorySelectorComponent,
    CustomDressCategorySelectorComponent,
    CustomAssetsComponent
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    MembershipProvider,
    ProductsProvider,
    OrdersProvider,
    OrderStore,
    ProfileStore,
    SharedProvider,
    ProductStore
    // ScreenOrientation

  ]
})
export class AppModule { }
