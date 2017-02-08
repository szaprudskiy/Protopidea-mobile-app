import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, Platform } from 'ionic-angular';
import { IdeaboxListPage } from '../ideabox-list/ideabox-list'
import { ForgotPassPage} from '../forgot-pass/forgot-pass';
import { Http,Jsonp } from '@angular/http';
import { Facebook, GooglePlus, TwitterConnect } from 'ionic-native';
import {UserController} from '../../providers/user-controller';
import { Storage } from '@ionic/storage';
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
                public storage: Storage,
                public platform: Platform
               ) {
    

  }

  regForm = {
    email: '',
    password: '',
  }


  goToForgotPass(){
    this.navCtrl.push(ForgotPassPage);
  }

  regFormSend(){
    this.userCtrl.login(this.regForm.email,this.regForm.password);
  }

   regWithFacebook(){
     this.storage.get('facebook').then(data=>{
        this.http.get('http://protopidea.pdigit.top/en/api/user/check-social?social_id=1&user_id='+ data.authResponse.userID)
                  .map(res => res.json())
                  .subscribe(data=>{
                    if (data.result>0){
                      this.navCtrl.setRoot(IdeaboxListPage)
                    } else{
                      alert('You are not registered')
                    }
                  })
           }).catch(error=>alert(error))
  }


  regWithTwitter(){
     this.storage.get('twitter').then(data=>{
       alert(JSON.stringify(data))
        this.http.get('http://protopidea.pdigit.top/en/api/user/check-social?social_id=2&user_id='+ data.userId)
                  .map(res => res.json())
                  .subscribe(data=>{
                    if (data.result>0){
                      this.navCtrl.setRoot(IdeaboxListPage)
                    } else{
                      alert('You are not registered')
                    }
                  })
           }).catch(error=>alert(error))
  }

  regWithGoogle(){
    this.storage.get('google').then(data=>{
        alert(JSON.stringify(data))
        this.http.get('http://protopidea.pdigit.top/en/api/user/check-social?social_id=4&user_id='+ data.userId)
                  .map(res => res.json())
                  .subscribe(data=>{
                    if (data.result>0){
                      this.navCtrl.setRoot(IdeaboxListPage)
                    } else{
                      alert('You are not registered')
                    }
                  })
           }).catch(error=>alert(error))
  }
}