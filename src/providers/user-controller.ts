import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { NavController, NavParams } from 'ionic-angular';
import { IdeaboxListPage } from '../pages/ideabox-list/ideabox-list';
import { Http,Jsonp } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the UserController provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class UserController {


  constructor(public http: Http,
              public alertCtrl: AlertController,
              public _jsonp: Jsonp,
              public navCtrl: NavController,
              public storage: Storage) {
    console.log('Hello UserController Provider');
   
    
  }

  loginInfo: any
  login(email : any, pass : any){
    this._jsonp.get('http://protopidea.pdigit.top/en/api/user/login?email='+email+'&password='+pass+'&callback=JSONP_CALLBACK').map(res => res.json()).subscribe(data => {
        if (data.result == 1)
            {
            this.navCtrl.setRoot(IdeaboxListPage);
            this.storage.set(`token`, data.errors.access_token)
              .then(
                data => console.log(data),
                error => console.log(error)
              );
            }
            if (data.result == 0)
            {
                alert(data.errors);
            }
    });
  }

  register(email : any, pass : any){
    this._jsonp.get('http://protopidea.pdigit.top/en/api/user/register?email='+email+'&password='+pass+'&callback=JSONP_CALLBACK').map(res => res.json()).subscribe(data => {
        console.log(data.errors);
        this.loginInfo = JSON.stringify(data.errors);
        alert(this.loginInfo);
    });
  }

  checkLogin(){
    return true;
  }

}
