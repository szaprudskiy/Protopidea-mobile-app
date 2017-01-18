import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MenuController} from 'ionic-angular';

/*
  Generated class for the MenuTest page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-menu-test',
  templateUrl: 'menu-test.html'
})
export class MenuTestPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuTestPage');
  }

}