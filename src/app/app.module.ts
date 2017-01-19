import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import {JsonpModule} from '@angular/http';
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { RegPage} from '../pages/reg-page/reg-page';
//import { ItemDetailsPage } from '../pages/item-details/item-details';
//import { ListPage } from '../pages/list/list';
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
import { MenuController } from 'ionic-angular';
import { MenuTestPage } from '../pages/menu-test/menu-test';
//import {  ItemDetailsPage } from '../pages/item-details/item-details';
import { IdeaCreatePage } from '../pages/idea-create/idea-create';
import { IdeaCreate2Page } from '../pages/idea-create2/idea-create2';



@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    RegPage,
    IdeaCreatePage,
    MyPage,
    Profile1Page,
    Profile2Page,
    Profile3Page,
    Profile4PopupCameraGalleryPage,
    Profile5UserProfilePage,
    Profile6PopupProfilePage,
    Profile7LogoutPage,
    Settings1ChangePSWDPage,
    Settings2LanguagePage,
    Settings3SupportPage,
    Settings4SupportIdeaPage,
    Settings5ReportProblemPage,
    Settings6ReportListPage,
    Settings7ReportAnswerPage,
    Settings8PopupPage,
    Settings9NotificationsPage,
    Settings10FaqPage,
    Settings11FaqOpenPage,
     //ItemDetailsPage
     IdeaCreate2Page
  ],
  imports: [
    JsonpModule,
    IonicModule.forRoot(MyApp, { 
      scrollAssist: false, 
      autoFocusAssist: false,
     })

  ],
  bootstrap: [
    IonicApp,
    
  
  ],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    RegPage,
    IdeaCreatePage,
    MyPage,
    Profile1Page,
    Profile2Page,
    Profile3Page,
    Profile4PopupCameraGalleryPage,
    Profile5UserProfilePage,
    Profile6PopupProfilePage,
    Profile7LogoutPage,
    Settings1ChangePSWDPage,
    Settings2LanguagePage,
    Settings3SupportPage,
    Settings4SupportIdeaPage,
    Settings5ReportProblemPage,
    Settings6ReportListPage,
    Settings7ReportAnswerPage,
    Settings8PopupPage,
    Settings9NotificationsPage,
    Settings10FaqPage,
    Settings11FaqOpenPage,
     //ItemDetailsPage
     IdeaCreate2Page
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
