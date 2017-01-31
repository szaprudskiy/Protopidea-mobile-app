import { Component } from '@angular/core';
import { NavController, NavParams, Platform, ModalController,ViewController } from 'ionic-angular';
import { IdeaCreatePage } from '../idea-create/idea-create';
import { IdeaCreate2Page } from '../idea-create2/idea-create2';
import { MyPage } from '../menu/menu';
import { ProtopideaChallengeListPage } from '../protopidea-challenge-list/protopidea-challenge-list';
import { ProtopideaChallengePage} from '../protopidea-challenge/protopidea-challenge';
import { File } from 'ionic-native';
import { IdeaboxLikesPage } from '../ideabox-likes/ideabox-likes';
import { IdeaboxSharePage } from '../ideabox-share/ideabox-share';
import { IdeaboxPopupPage } from '../ideabox-popup/ideabox-popup';
import { IdeaboxCommentsPage } from '../ideabox-comments/ideabox-comments';
import { IdeaboxFollowedGroupsPage } from '../ideabox-followed-groups/ideabox-followed-groups';
import { Storage } from '@ionic/storage';

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

  ideas = []

  constructor(public navCtrl: NavController,
               public navParams: NavParams,
               public platform: Platform,
               public modalCtrl: ModalController,
               public storage: Storage,
               public viewCtrl: ViewController) {
               }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IdeaboxListPage');
    //this.storage.set('ideas',[]);
    this.storage.get('ideas')
        .then((val) => {
              if (val ==null){
                this.storage.set('ideas',[]);
              } else{
                this.ideas = val;
              }
        });
  }
  ionViewDidEnter(){
    this.storage.get('ideas')
        .then((val) => {
              if (val ==null){
                this.storage.set('ideas',[]);
              } else{
                this.ideas = val;
              }
        });
  }


  goToCreateIdea(){
    this.navCtrl.push(IdeaCreatePage,{},{animate: true, direction: 'right', })
  }

  goToMenu(){
    this.navCtrl.push(MyPage)
  }

  goToChallenges(){
    this.navCtrl.push(ProtopideaChallengePage)
  }

  goToNotifications(){
    this.navCtrl.push(IdeaCreate2Page)
  }

  goToIdea(params : any){
    this.navCtrl.push(IdeaCreate2Page,{idea:params});
  }

  openLikes(){
    let likesModal = this.modalCtrl.create(IdeaboxLikesPage);
    likesModal.present();
  }

  openShare(){
    let shareModal = this.modalCtrl.create(IdeaboxSharePage);
    shareModal.present();
  }

  openMessages(){
    let messagesModal = this.modalCtrl.create(IdeaboxCommentsPage);
    messagesModal.present();
  }

  openFollowedGroups(){
    let groupsModal = this.modalCtrl.create(IdeaboxFollowedGroupsPage);
    groupsModal.present();
  }
}
