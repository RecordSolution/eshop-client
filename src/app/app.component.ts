import { Component, ViewChild,OnChanges } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
// import { StatusBar } from '@ionic-native/status-bar';
// import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from './../pages/membership/login/login'
import { CategoriesPage } from "./../pages/buyer/categories/categories";
// import { CustomDesignHomePage } from '../pages/buyer/customDesign/custom-design/custom-design-home';
import { SharedProvider } from "./../providers/shared/shared";
import { AdmindashboardPage } from '../pages/admin/admindashboard/admindashboard';
import { ProfileStore } from './../store/profilestore/profileStore'
import { CutomDesignCategorySelectorPage } from '../pages/buyer/cutom-design-category-selector/cutom-design-category-selector';
import { UserOrdersPage } from '../pages/buyer/user-orders/user-orders';
import { AddProductPage } from '../pages/admin/add-product/add-product';
// import { DesignCanvasPage } from '../pages/buyer/customDesign/design-canvas/design-canvas';
@Component({
  templateUrl: 'app.html'
})
export class MyApp implements OnChanges{
  activePage: any
  @ViewChild(Nav) nav: Nav;
  rootPage: any;
  pages: Array<{ title: string, component: any }>;


  constructor(platform: Platform,
    // statusBar: StatusBar,
    // splashScreen: SplashScreen,
    public profileStore: ProfileStore,
    public sharedService: SharedProvider) {

    platform.ready().then(() => {
      if (localStorage.getItem('userData')) {
        let data = JSON.parse(localStorage.getItem('userData'))
        if (data && data.accessTokken) {
          // this.navCtrl.setRoot(CategoriesPage);
          if (data.accountType == 'buyer') {
            this.rootPage = CategoriesPage;
          } else {
            this.rootPage = CategoriesPage;
          }

        } else {
          this.rootPage = CategoriesPage;
        }
      }
      else {
        this.rootPage = CategoriesPage;
      }
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      // statusBar.styleDefault();
      // splashScreen.hide();
    });
    this.pagesForMenu();


  }

  pagesForMenu(){
    // if (this.profileStore.currentUserData && this.profileStore.currentUserData.accountType == 'buyer') {
    //   this.pages = [
    //     { title: 'Home', component: CategoriesPage },
    //     { title: 'Custom Design', component: CustomDesignHomePage },
    //     { title: 'LogOut', component: LoginPage }
    //   ];
    // } else if(this.profileStore.currentUserData && this.profileStore.currentUserData.accountType == 'admin'){
    //   this.pages = [
    //     { title: 'Orders', component: AdmindashboardPage },
    //     { title: 'Products', component: AdmindashboardPage },
    //     { title: 'LogOut', component: LoginPage }
    //   ];
    // }
  }
  ngOnChanges(){
    this.pagesForMenu();
  }

  initializeApp() {

  }

  openPage(pageName) {
    if(pageName=='home'){
      this.nav.push(CategoriesPage);
    }
    else if(pageName=='customDesign'){
      this.nav.push(CutomDesignCategorySelectorPage);
    }
    else if(pageName=='add-product'){
      this.nav.push(AddProductPage);
    }
    else if(pageName=='adminOrders'){
      this.nav.push(AdmindashboardPage);
    }
    else if(pageName=='adminProducts'){
      this.nav.push(AdmindashboardPage);
    }
    else if(pageName=='buyer-orders'){
      this.nav.push(UserOrdersPage)
    }
  
    else if(pageName=='logout'){
      this.nav.setRoot(LoginPage);
      localStorage.clear();
      // this.nav.setRoot(page.component);
      this.sharedService.clearStores();
    }
  //   // Reset the content nav to have just this page
  //   // we wouldn't want the back button to show in this scenario
  //   this.nav.setRoot(page.component);
  //   if (page.title == 'LogOut') {
  //     localStorage.clear();
  //     this.nav.setRoot(page.component);
  //     this.sharedService.clearStores();
  //   }else{
  //     this.nav.push(page.component);
  //   }
  //   // this.activePage = page;
  }
}

