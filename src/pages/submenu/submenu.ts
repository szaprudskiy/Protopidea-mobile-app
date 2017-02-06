import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { MyPage } from '../menu/menu';
import { Settings2LanguagePage } from '../settings-2-language/settings-2-language';
import { Settings9NotificationsPage } from '../settings-9-notifications/settings-9-notifications'
import { Settings1ChangePSWDPage } from '../settings-1-change-pswd/settings-1-change-pswd'
import { Settings3SupportPage } from '../settings-3-support/settings-3-support'
import { Settings10FaqPage } from '../settings-10-faq/settings-10-faq'
import { Settings5ReportProblemPage } from '../settings-5-report-problem/settings-5-report-problem'


/*
  Generated class for the Submenu page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-submenu',
  templateUrl: 'submenu.html'
})
export class SubmenuPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modalCtrl: ModalController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SubmenuPage');
  }

   backmenu() {
       this.navCtrl.pop();
    }

  goToLanguage(){
    let languageModal = this.modalCtrl.create(Settings2LanguagePage);
    languageModal.present();
  }

  goToNotifications(){
    let notifications = this.modalCtrl.create(Settings9NotificationsPage);
    notifications.present();
  }

  goToPassword(){
    let password = this.modalCtrl.create(Settings1ChangePSWDPage);
    password.present();
  }

  goToSupport(){
    let support = this.modalCtrl.create(Settings3SupportPage);
    support.present();
  }

  goToFaq(){
    let faq = this.modalCtrl.create(Settings10FaqPage);
    faq.present();
  }

  goToReport(){
    let report = this.modalCtrl.create(Settings5ReportProblemPage);
    report.present();
  }
}
