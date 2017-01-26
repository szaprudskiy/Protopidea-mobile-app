import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SearchResultsPage } from '../search-results/search-results';
/*
  Generated class for the MyGroups page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-my-groups',
  templateUrl: 'my-groups.html'
})
export class MyGroupsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyGroupsPage');
  }

   clickbacktosearch() {
       this.navCtrl.push( SearchResultsPage );
    }

}
