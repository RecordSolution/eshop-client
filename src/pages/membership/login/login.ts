import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { SignupPage } from "./../signup/signup";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(
    public navCtrl: NavController,
    private alertCtrl:AlertController,
    
    ) {

  }

  forgotpassword(){
    let alert = this.alertCtrl.create({
      
      title: 'Forgot Password',
      inputs: [
        
        {
          
          name: 'email',
          placeholder: 'Enter Email Address',
          type:'text'
         
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

  signup(){
    this.navCtrl.push(SignupPage);
  }
  }

