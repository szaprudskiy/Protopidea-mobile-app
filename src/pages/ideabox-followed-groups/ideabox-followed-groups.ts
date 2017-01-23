import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the IdeaboxFollowedGroups page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-ideabox-followed-groups',
  templateUrl: 'ideabox-followed-groups.html'
})
export class IdeaboxFollowedGroupsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad IdeaboxFollowedGroupsPage');
  }

}
