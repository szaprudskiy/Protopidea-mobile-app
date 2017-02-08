import { Component } from '@angular/core';
import { NavController, NavParams, Platform, ModalController,ViewController } from 'ionic-angular';
import { IdeaCreatePage } from '../idea-create/idea-create';
import { IdeaCreate2Page } from '../idea-create2/idea-create2';
import { MyPage } from '../menu/menu';
import { ProtopideaChallengeListPage } from '../protopidea-challenge-list/protopidea-challenge-list';
import { ProtopideaChallengePage} from '../protopidea-challenge/protopidea-challenge';
import { File } from 'ionic-native';
import { Http,Jsonp } from '@angular/http';
import { IdeaboxLikesPage } from '../ideabox-likes/ideabox-likes';
import { IdeaboxSharePage } from '../ideabox-share/ideabox-share';
import { IdeaboxPopupPage } from '../ideabox-popup/ideabox-popup';
import { IdeaboxCommentsPage } from '../ideabox-comments/ideabox-comments';
import { IdeaboxFollowedGroupsPage } from '../ideabox-followed-groups/ideabox-followed-groups';
import {NotificationsPage} from '../notifications/notifications'
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
  token = 'MnTvRHONp556fFWMJWBBNFuk741RSV8yGUo7qTNh84oQJ7DISh9pctgjzJZNz2kZ2cYmhIQ9Put73aH4AfLkaq6GTcGK4L6dO2mGhWTjvcE9M63MwfNGzevMz2eAjixs'

  constructor(public navCtrl: NavController,
               public navParams: NavParams,
               public platform: Platform,
               public modalCtrl: ModalController,
               public storage: Storage,
               public viewCtrl: ViewController,
               public http: Http) {
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
    var unregister = this.platform.registerBackButtonAction(() => {
      alert('Press back one more time to exit app');
      unregister();
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
    this.navCtrl.setRoot(MyPage)
  }

  goToChallenges(){
    this.navCtrl.push(ProtopideaChallengeListPage)
  }

  goToNotifications(){
    this.navCtrl.push(NotificationsPage)
  }

  goToIdea(params : any){
    this.navCtrl.push(IdeaCreate2Page,{idea:params});
  }

  openLikes(ev: any){
    this.http.get('http://protopidea.pdigit.top/en/api/ideas/like?access_token='+this.token+'&idea_id='+1)
              .map(res=>res.json())
              .subscribe(data=>{
                console.log(data)
                  if (typeof data.like != undefined ){
                    ev.target.src='assets/img/idea-active.png'
                  } 
                  if (data.deleted_like_id>0)
                  {
                    ev.target.src='assets/img/idea-list-icon1.png'
                  }
              })
  }

  openShares(){
    
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
