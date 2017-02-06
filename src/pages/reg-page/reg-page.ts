import { Component } from '@angular/core';
import { HelloIonicPage } from '../hello-ionic/hello-ionic';
import { MenuController } from 'ionic-angular';
import { NavController, NavParams } from 'ionic-angular';
import { Facebook } from 'ionic-native';
import { GooglePlus } from 'ionic-native';
import { TwitterConnect } from 'ionic-native';
import { TermsAndConditionsPage} from '../terms-and-conditions/terms-and-conditions';
import { ForgotPassPage } from '../forgot-pass/forgot-pass';
import { UserController } from '../../providers/user-controller';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';
import {InAppBrowser} from 'ionic-native';
import 'rxjs/add/operator/map';


/*
  Generated class for the RegPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-reg',
  templateUrl: 'reg-page.html',
  providers : [UserController]
  })
export class RegPage {

  constructor(
      public navCtrl: NavController, 
      public navParams: NavParams,
      public menuCtrl: MenuController,
      public userCtrl: UserController,
      public http: Http,
      public storage: Storage) {}
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
            alert(JSON.stringify(response.authResponse));
            this.storage.set('facebook',response.authResponse);
        }, function(error){
            alert(error);
        });
  }
  onSuccess(response) {
    alert(JSON.stringify(response));
    this.storage.set('twitter',response);
  }

  onError(response) {
    alert(JSON.stringify(response));
  }

  regWithTwitter(){
    TwitterConnect.login().then(this.onSuccess, this.onError);
  }

  regWithGoogle(){
    GooglePlus.login({
      'scopes': '', // optional, space-separated list of scopes, If not included or empty, defaults to `profile` and `email`.
      'webClientId': '485661605292-v5il4ttnjcri8k7ekmndn6ugd9ts9gft.apps.googleusercontent.com', // optional clientId of your Web application from Credentials settings of your project - On Android, this MUST be included to get an idToken. On iOS, it is not required.
      'offline': true
    }
    )
      .then(res => {
        alert(JSON.stringify(res));
        this.storage.set('google', res);
        })
      .catch(err => alert(JSON.stringify(err)));
  }

  regWithXing(){
      let data ={
        oauth_consumer_key: '7337fc71168be8a0f8fe',
        oauth_callback: 'com.protopidea://',
        oauth_signature_method:'PLAINTEXT',
        oauth_signature:'21b78841603fb916446de8f0b4d24252b8a18c2b'
      }
      this.http.get('https://api.xing.com/v1/request_token?oauth_consumer_key=7337fc71168be8a0f8fe&oauth_callback=com.protopidea://&oauth_signature_method=PLAINTEXT&oauth_signature=&')
      .map(res => res.json()).subscribe(data => {
      console.log(data.status);
      console.log(data.data); // data received by server
      console.log(data.headers);
    });

  
  }
  regWithInstagram(){
    let browser = new InAppBrowser('https://ionic.io', '_system');
    browser.show();
  }
  comingSoon(){
    alert('This feature is coming soon')
  }
}
