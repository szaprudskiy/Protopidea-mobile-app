import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the ProtopideaChallengeFolders page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-protopidea-challenge-folders',
  templateUrl: 'protopidea-challenge-folders.html'
})
export class ProtopideaChallengeFoldersPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProtopideaChallengeFoldersPage');
  }

}
