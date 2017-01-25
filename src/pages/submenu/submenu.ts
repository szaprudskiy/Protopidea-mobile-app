import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MyPage } from '../menu/menu';

/*
  Generated class for the Submenu page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-submenu',
  templateUrl: 'submenu.html'
})
export class SubmenuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SubmenuPage');
  }

   backmenu() {
       this.navCtrl.pop();
    }

}
