import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { IdeaCreatePage } from '../idea-create/idea-create';
import { ForgotPassPage} from '../forgot-pass/forgot-pass';
import { Http,Jsonp } from '@angular/http';
import { Facebook, GooglePlus, TwitterConnect } from 'ionic-native';
import {UserController} from '../../providers/user-controller';
import 'rxjs/add/operator/map';


@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html',
  providers : [UserController],
})
export class HelloIonicPage {
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public http: Http,
              public alertCtrl: AlertController,
              public _jsonp: Jsonp,
              public userCtrl: UserController,
               ) {
  }

  regForm = {
    email: '',
    password: '',
  }

  goToIdeaCreate(){
    this.navCtrl.push(IdeaCreatePage);
  }

  goToForgotPass(){
    this.navCtrl.push(ForgotPassPage);
  }

  regFormSend(){
    this.userCtrl.login(this.regForm.email,this.regForm.password);
  }

   regWithFacebook(){
    facebookConnectPlugin.login(['email'], function(response) {
            alert('Logged in');
            alert(JSON.stringify(response.authResponse));
            
        }, function(error){
            alert(error);
        });
  }
  onSuccess(response) {
    alert(JSON.stringify(response));
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
      .then(res => alert(JSON.stringify(res)))
      .catch(err => alert(JSON.stringify(err)));
  }

}
