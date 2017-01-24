import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { IdeaCreatePage } from '../idea-create/idea-create';
import { AlertController } from 'ionic-angular';
import { HTTP } from 'ionic-native';
import { Http } from '@angular/http';
import {Jsonp} from '@angular/http';
import 'rxjs/add/operator/map';


@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public http: Http,
              public alertCtrl: AlertController,
              public _jsonp: Jsonp,
               ) {
    
  }

  loginInfo : any;

  goToIdeaCreate(){
    this.navCtrl.push(IdeaCreatePage);
  }

  login(){
    /*HTTP.get('http://protopidea.pdigit.top/en/api/user/login', 
          {email:"zvezdo4et89@gmail.com",
          password: "max89_max89"
          }, {})
              .then(data => {

                console.log(data.status);
                console.log(data.data); // data received by server
                console.log(data.headers);

              })
              .catch(error => {

                console.log(error.status);
                console.log(error.error); // error message as string
                console.log(error.headers);

      });*/
    /*this._jsonp.get('http://protopidea.pdigit.top/en/api/user/login?email=zvezdo4et89@gmail.com&password=max89_max89&callback=JSONP_CALLBACK').map(res => res.json()).subscribe(data => {
        console.log(data.errors);
        this.loginInfo = data;
        let alert = this.alertCtrl.create({
        title: 'login info',
        subTitle: data,
        buttons: ['OK']
      });*/
    });
  }

}
