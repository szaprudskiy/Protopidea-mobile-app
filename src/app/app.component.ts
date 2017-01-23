import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { ReactiveFormsModule } from '@angular/forms';
import {Keyboard} from 'ionic-native';
import { StatusBar, Splashscreen } from 'ionic-native';
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { RegPage} from '../pages/reg-page/reg-page';
import { TermsAndConditionsPage} from '../pages/terms-and-conditions/terms-and-conditions';
import { ForgotPassPage } from '../pages/forgot-pass/forgot-pass';
import { Profile1Page } from '../pages/profile-1/profile-1';
import { Profile2Page } from '../pages/profile-2/profile-2';
import { Profile3Page } from '../pages/profile-3/profile-3';
import { Profile4PopupCameraGalleryPage } from '../pages/profile-4-popup-camera-gallery/profile-4-popup-camera-gallery';
import { Profile5UserProfilePage } from '../pages/profile-5-user-profile/profile-5-user-profile';
import { Profile6PopupProfilePage } from '../pages/profile-6-popup-profile/profile-6-popup-profile';
import { Profile7LogoutPage } from '../pages/profile-7-logout/profile-7-logout';
import { Settings1ChangePSWDPage } from '../pages/settings-1-change-pswd/settings-1-change-pswd';
import { Settings2LanguagePage } from '../pages/settings-2-language/settings-2-language';
import { Settings3SupportPage } from '../pages/settings-3-support/settings-3-support';
import { Settings4SupportIdeaPage } from '../pages/settings-4-support-idea/settings-4-support-idea';
import { Settings5ReportProblemPage } from '../pages/settings-5-report-problem/settings-5-report-problem';
import { Settings6ReportListPage } from '../pages/settings-6-report-list/settings-6-report-list';
import { Settings7ReportAnswerPage } from '../pages/settings-7-report-answer/settings-7-report-answer';
import { Settings8PopupPage } from '../pages/settings-8-popup/settings-8-popup';
import { Settings9NotificationsPage } from '../pages/settings-9-notifications/settings-9-notifications';
import { Settings10FaqPage } from '../pages/settings-10-faq/settings-10-faq';
import { Settings11FaqOpenPage } from '../pages/settings-11-faq-open/settings-11-faq-open';
import {  MyPage } from '../pages/menu/menu';
import { NavController } from 'ionic-angular';
import { MenuTestPage } from '../pages/menu-test/menu-test';
//import {  ItemDetailsPage } from '../pages/item-details/item-details';
import { IdeaCreatePage } from '../pages/idea-create/idea-create';
import { IdeaCreate2Page } from '../pages/idea-create2/idea-create2';
import { IdeaboxListPage } from '../pages/ideabox-list/ideabox-list';
import { IdeaboxFollowedGroupsPage } from '../pages/ideabox-followed-groups/ideabox-followed-groups';
import { IdeaboxLikesPage } from '../pages/ideabox-likes/ideabox-likes';
import { IdeaboxCommentsPage } from '../pages/ideabox-comments/ideabox-comments';



@Component({
  templateUrl: 'app.html'
  
})
export class MyApp {
  @ViewChild('myNav') nav: NavController


  rootPage: any =  HelloIonicPage;

  constructor(
    public platform: Platform,
  ) {

    
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      //Splashscreen.hide();
    });
  

  }


}
