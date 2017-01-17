import { Component } from '@angular/core';
import { HelloIonicPage } from '../hello-ionic/hello-ionic';
import { NavController, NavParams } from 'ionic-angular';


/*
  Generated class for the RegPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-reg',
  templateUrl: 'reg-page.html'
})
export class RegPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegPage');
  }

  goToLogin(){
    this.navCtrl.push(HelloIonicPage);
  }
}
