import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MyPage } from '../menu/menu';
import { FindCollaboratorsPage } from '../find-collaborators/find-collaborators';
/*
  Generated class for the SearchResults page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-search-results',
  templateUrl: 'search-results.html'
})
export class SearchResultsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchResultsPage');
  }
  
 clickbackfindcoll() {
       this.navCtrl.push( FindCollaboratorsPage );
    }


}
