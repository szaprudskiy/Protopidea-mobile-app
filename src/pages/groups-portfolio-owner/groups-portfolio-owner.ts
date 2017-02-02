import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the GroupsPortfolioOwner page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-groups-portfolio-owner',
  templateUrl: 'groups-portfolio-owner.html'
})
export class GroupsPortfolioOwnerPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad GroupsPortfolioOwnerPage');
  }

}
