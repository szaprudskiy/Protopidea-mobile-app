import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ProtopideaChallengePage} from '../protopidea-challenge/protopidea-challenge'

/*
  Generated class for the ProtopideaChallengeList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-protopidea-challenge-list',
  templateUrl: 'protopidea-challenge-list.html'
})
export class ProtopideaChallengeListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProtopideaChallengeListPage');
  }

  goToChallenge(){
    this.navCtrl.push(ProtopideaChallengePage)
  }
}
