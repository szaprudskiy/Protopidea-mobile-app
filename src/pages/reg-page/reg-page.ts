import { Component } from '@angular/core';
import { HelloIonicPage } from '../hello-ionic/hello-ionic';
import { MenuController } from 'ionic-angular';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { Facebook } from 'ionic-native';
import { GooglePlus } from 'ionic-native';
import { TwitterConnect } from 'ionic-native';
import { TermsAndConditionsPage} from '../terms-and-conditions/terms-and-conditions';
import { ForgotPassPage } from '../forgot-pass/forgot-pass';
import { UserController } from '../../providers/user-controller';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';
import {InAppBrowser} from 'ionic-native';
import { IdeaboxListPage } from '../ideabox-list/ideabox-list'
import { PopupPage} from '../popup/popup';
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
      public storage: Storage,
      public modalCtrl: ModalController) {}
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
    var regmodal = this.modalCtrl.create(PopupPage)
    regmodal.present()
    regmodal.onDidDismiss(() => {
      this.userCtrl.register(this.regForm.email,this.regForm.password);
    });
  }

  goToTerms(){
    this.navCtrl.push(TermsAndConditionsPage);
  }

  goToForgotPass(){
    this.navCtrl.push(ForgotPassPage);
  }

  facebookReg(){
    let facebook: {}
    return new Promise(resolve => {
       facebookConnectPlugin.login(['email'], function(response) {
         facebook = response
         resolve(facebook)
        },function(error){
            alert(error);
        });
    });
  }

  twitter : any

  regWithFacebook(){
     this.facebookReg().then(data=>{
       this.twitter = data
       this.storage.set('facebook',this.twitter)
        this.http.get('http://protopidea.pdigit.top/en/api/user/register-social?social_id=1&access_token='+ this.twitter.authResponse.accessToken+'&user_id='+this.twitter.authResponse.userID)
                    .map(res => res.json())
                    .subscribe(data=>{
                      this.navCtrl.setRoot(IdeaboxListPage)
                    })
     })
  }

  twitterReg(){
    let tw = {}
    return new Promise(resolve => {
      TwitterConnect.login().then( function(response) {
         tw = response
         resolve(tw)
        },function(error){
            alert(error);
        })
    })
}

  regWithTwitter(){
     this.twitterReg().then(data=>{
       this.twitter = data
       this.storage.set('twitter',this.twitter)
        this.http.get('http://protopidea.pdigit.top/en/api/user/register-social?social_id=2&access_token='+ this.twitter.token+'&user_id='+this.twitter.userId)
                    .map(res => res.json())
                    .subscribe(data=>{
                      this.navCtrl.setRoot(IdeaboxListPage)
                    })
     })
  }

  regWithGoogle(){
    GooglePlus.login({
       'scopes': '', // optional, space-separated list of scopes, If not included or empty, defaults to `profile` and `email`.
      'webClientId': '43710822134-s71fs2pkdcj2boiltujde0ncfpfael2m.apps.googleusercontent.com', // optional clientId of your Web application from Credentials settings of your project - On Android, this MUST be included to get an idToken. On iOS, it is not required.
      'offline': true
    }
    )
      .then(res => {
        this.storage.set('google',this.twitter)
        //alert(JSON.stringify(res));
        this.http.get('http://protopidea.pdigit.top/en/api/user/register-social?social_id=4&access_token='+ res.idToken+'&user_id='+res.userId)
                    .map(res => res.json())
                    .subscribe(data=>{
                        //alert(JSON.stringify(data));
                        this.navCtrl.setRoot(IdeaboxListPage)                        
                    })
        })
      .catch(err => alert("error "+JSON.stringify(err)));
  }

  

  
  regWithInstagram(){
    let browser = new InAppBrowser('https://ionic.io');
    browser.show();
  }
  comingSoon(){
    alert('This feature is coming soon')
  }
}
