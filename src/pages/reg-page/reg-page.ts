import { Component } from '@angular/core';
import { HelloIonicPage } from '../hello-ionic/hello-ionic';
import { MenuController } from 'ionic-angular';
import { NavController, NavParams } from 'ionic-angular';
import { Facebook } from 'ionic-native';
import {TwitterConnect} from 'ionic-native';
import { TermsAndConditionsPage} from '../terms-and-conditions/terms-and-conditions';
import { ForgotPassPage } from '../forgot-pass/forgot-pass';
import {UserController} from '../../providers/user-controller';


/*
  Generated class for the RegPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-reg',
  templateUrl: 'reg-page.html',
  providers : [UserController],})
export class RegPage {

  

  constructor(
      public navCtrl: NavController, 
      public navParams: NavParams,
      public menuCtrl: MenuController,
      public userCtrl: UserController) {}
  regForm = {
    name: '',
    email: '',
    password: '',
    terms:'',
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad RegPage');
  }

  goToLogin(){
    this.navCtrl.push(HelloIonicPage);
  }


  regFormSend (){
    this.userCtrl.register(this.regForm.email,this.regForm.password);
  }

  goToTerms(){
    this.navCtrl.push(TermsAndConditionsPage);
  }

  goToForgotPass(){
    this.navCtrl.push(ForgotPassPage);
  }

  regWithFacebook(){
    facebookConnectPlugin.login(['email'], function(response) {
            alert('Logged in');
            alert(JSON.stringify(response.authResponse));
        }, function(error){
            alert(error);
        });
  }

  comingSoon(){
    alert('This feature is coming soon')
  }
}
