import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
import {Jsonp} from '@angular/http';
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
              public _jsonp: Jsonp,) {
    console.log('Hello UserController Provider');
  }

  loginInfo: any
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
    this._jsonp.get('http://protopidea.pdigit.top/en/api/user/login?email=zvezdo4et89@gmail.com&password=max89_max89&callback=JSONP_CALLBACK').map(res => res.json()).subscribe(data => {
        console.log(data.errors);
        this.loginInfo = JSON.stringify(data.errors);
        alert(this.loginInfo);
    });
  }

}
