import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { IdeaCreatePage } from '../idea-create/idea-create';
import { IdeaCreate2Page } from '../idea-create2/idea-create2';
import { MyPage } from '../menu/menu';
import { ProtopideaChallengeListPage } from '../protopidea-challenge-list/protopidea-challenge-list';

/*
  Generated class for the IdeaboxList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-ideabox-list',
  templateUrl: 'ideabox-list.html'
})
export class IdeaboxListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad IdeaboxListPage');
  }
  


  goToCreateIdea(){
    this.navCtrl.push(IdeaCreatePage)
  }

  goToMenu(){
    this.navCtrl.push(MyPage)
  }

  goToChallenges(){
    this.navCtrl.push(ProtopideaChallengeListPage)
  }

  goToNotifications(){
  }
}
