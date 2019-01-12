import { Component,ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from './../pages/membership/login/login'
import { CategoriesPage } from "./../pages/buyer/categories/categories";
import { CustomDesignPage } from '../pages/buyer/custom-design/custom-design';
import { SharedProvider } from "./../providers/shared/shared";
import { AdmindashboardPage } from '../pages/admin/admindashboard/admindashboard';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  activePage:any
  @ViewChild(Nav) nav: Nav;
  rootPage: any;
  pages: Array<{ title: string, component: any }>;


  constructor(platform: Platform, 
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    public sharedService:SharedProvider) {
    platform.ready().then(() => {
      if (localStorage.getItem('userData')) {
        let data = JSON.parse(localStorage.getItem('userData'))
        if (data && data.accessTokken) {
          // this.navCtrl.setRoot(CategoriesPage);
          if(data.accountType=='buyer'){
            this.rootPage = CategoriesPage;
          }else{
            this.rootPage = AdmindashboardPage;
          }
         
        } else {
          this.rootPage = LoginPage;
        }
      }
      else {
        this.rootPage = LoginPage;
      }
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.pages = [
      { title: 'Home', component: CategoriesPage },
      { title: 'Custom Design', component: CustomDesignPage },
      { title: 'LogOut', component: LoginPage }
    ];

  }

  initializeApp() {

  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
    if(page.title=='LogOut'){
      localStorage.clear();
      this.sharedService.clearStores();
    }
    this.activePage = page;
  }
}

