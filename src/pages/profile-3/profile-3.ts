import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Profile2Page } from '../profile-2/profile-2';
import { Profile1Page } from '../profile-1/profile-1';

/*
  Generated class for the Profile3 page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-profile-3',
  templateUrl: 'profile-3.html'
})
export class Profile3Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad Profile3Page');
  }

}
