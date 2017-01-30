import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { IdeaCreatePage } from '../idea-create/idea-create';
import { ForgotPassPage} from '../forgot-pass/forgot-pass';
import { AlertController } from 'ionic-angular';
import { HTTP } from 'ionic-native';
import { Http } from '@angular/http';
import {Jsonp} from '@angular/http';
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

}
