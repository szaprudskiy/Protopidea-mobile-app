import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { IdeaCreatePage } from '../idea-create/idea-create';
import { IdeaCreate2Page } from '../idea-create2/idea-create2';
import { MyPage } from '../menu/menu';
import { ProtopideaChallengeListPage } from '../protopidea-challenge-list/protopidea-challenge-list';
import { ProtopideaChallengePage} from '../protopidea-challenge/protopidea-challenge';
import { File } from 'ionic-native';

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

  storageDirectory:string = ''
  constructor(public navCtrl: NavController,
               public navParams: NavParams,
               public platform: Platform) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad IdeaboxListPage');

      if(!this.platform.is('cordova')) {
        return false;
      }

      if (this.platform.is('ios')) {
        this.storageDirectory = cordova.file.documentsDirectory;
      }
      else if(this.platform.is('android')) {
        this.storageDirectory = cordova.file.dataDirectory;
        alert(this.storageDirectory);
      }
      else {
        // exit otherwise, but you could add further types here e.g. Windows
        return false;
      }
    File.checkDir(this.storageDirectory, '').then(_ => alert('yay')).catch(err => alert('boooh'));
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

  
}
