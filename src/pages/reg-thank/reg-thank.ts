import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HelloIonicPage} from '../hello-ionic/hello-ionic';

/*
  Generated class for the RegThank page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-reg-thank',
  templateUrl: 'reg-thank.html'
})
export class RegThankPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegThankPage');
  }

  goToLogin(){
    this.navCtrl.push(HelloIonicPage);
  }
}
