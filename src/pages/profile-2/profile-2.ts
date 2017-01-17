import { Component } from '@angular/core';
//import { Profile1Page } from './profile-1';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Profile2 page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-profile-2',
  templateUrl: 'profile-2.html'
})
export class Profile2Page {
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Profile2Page');
  }
 

}
