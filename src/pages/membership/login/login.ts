import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { SignupPage } from "./../signup/signup";
import { CategoriesPage } from '../../buyer/categories/categories';
import { MembershipProvider } from "./../../../providers/membership/membership";
import { LoginModel } from './model/login';
import { AdmindashboardPage } from '../../admin/admindashboard/admindashboard';
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage implements OnInit {
  userCredentials: LoginModel;
  constructor(
    public navCtrl: NavController,
    private alertCtrl: AlertController,
    private membershipService: MembershipProvider

  ) {
    this.userCredentials = new LoginModel();
  }

  ngOnInit() {

  }

  forgotpassword() {
    let alert = this.alertCtrl.create({

      title: 'Forgot Password',
      inputs: [

        {

          name: 'email',
          placeholder: 'Enter Email Address',
          type: 'text'

        }
      ],
      buttons: [

        {

          text: 'Cancel',
          role: 'Cancel',
          handler: data => {

          }
        },
        {

          cssClass: 'ok',
          text: 'ok',
          handler: data => {

          }
        }
      ]
    });
    alert.present();
  }

  signup() {
     this.navCtrl.push(SignupPage)
    console.log("here");
  }

  logIn() {
    this.membershipService.login(this.userCredentials).subscribe((res: any) => {
      if (res) {
        if (res.role == 'buyer') {
          this.navCtrl.setRoot(CategoriesPage);
        }else{
          this.navCtrl.setRoot(AdmindashboardPage);
        }

      } else {
        this.showError('login failed');
      }
    }, error => {
      this.showError(error.message);
    })

  }

  showError(error) {
    alert(error);
  }
}

