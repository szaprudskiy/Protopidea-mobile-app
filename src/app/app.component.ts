import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { ReactiveFormsModule } from '@angular/forms';
import { StatusBar, Splashscreen, SecureStorage } from 'ionic-native';
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
//import {  ItemDetailsPage } from '../pages/item-details/item-details';
import { IdeaCreatePage } from '../pages/idea-create/idea-create';
import { IdeaCreate2Page } from '../pages/idea-create2/idea-create2';
import { IdeaboxListPage } from '../pages/ideabox-list/ideabox-list';
import { IdeaboxFollowedGroupsPage } from '../pages/ideabox-followed-groups/ideabox-followed-groups';
import { IdeaboxLikesPage } from '../pages/ideabox-likes/ideabox-likes';
import { IdeaboxCommentsPage } from '../pages/ideabox-comments/ideabox-comments';
import { IdeaboxPopupPage } from '../pages/ideabox-popup/ideabox-popup';
import { IdeaboxViewGroupPage } from '../pages/ideabox-view-group/ideabox-view-group';
import { IdeaboxCategoriesPage } from '../pages/ideabox-categories/ideabox-categories';
import { IdeaboxSharePage } from '../pages/ideabox-share/ideabox-share';
import { SubmenuPage } from '../pages/submenu/submenu';
import { FindCollaboratorsPage } from '../pages/find-collaborators/find-collaborators';
import { PortfolioOwnerPage } from '../pages/portfolio-owner/portfolio-owner';
import { SharedGroupsPage } from '../pages/shared-groups/shared-groups';
import { ButtonsCollaborationsPage } from '../pages/buttons-collaborations/buttons-collaborations';
import { ButtonsCollaborations2Page } from '../pages/buttons-collaborations2/buttons-collaborations2';
import { FailedLoginPage } from '../pages/failed-login/failed-login';
import { QuotesPagePage } from '../pages/quotes-page/quotes-page';
import { SearchResultsPage } from '../pages/search-results/search-results';
import { RegThankPage} from '../pages/reg-thank/reg-thank';
import { MyGroupsPage } from '../pages/my-groups/my-groups';
import { PopupFeedbackPage } from '../pages/popup-feedback/popup-feedback';
import { ProtopideaChallengePage } from '../pages/protopidea-challenge/protopidea-challenge';
import { ProtopideaChallengeListPage } from '../pages/protopidea-challenge-list/protopidea-challenge-list';
import { ProtopideaChallengeFoldersPage } from '../pages/protopidea-challenge-folders/protopidea-challenge-folders';
import { ProtopideaChallengePopupButtonsPage } from '../pages/protopidea-challenge-popup-buttons/protopidea-challenge-popup-buttons';
import { ChallengeListPage } from '../pages/challenge-list/challenge-list';
import { UserController } from '../providers/user-controller';
import { Storage } from '@ionic/storage';
import { GroupsPortfolioOwnerPage } from '../pages/groups-portfolio-owner/groups-portfolio-owner';
import { SharedWithPage } from '../pages/shared-with/shared-with';
import { ImagesAndVideoPage } from '../pages/images-and-video/images-and-video';
import { PopupProjectPage } from '../pages/popup-project/popup-project';
import { PopupProjectItemsPage } from '../pages/popup-project-items/popup-project-items';
import { UploadFilesCloudPage } from '../pages/upload-files-cloud/upload-files-cloud';


@Component({
  templateUrl: 'app.html',
  providers: [Storage]
})

export class MyApp {
  @ViewChild('myNav') nav: NavController

 
  rootPage: any = UploadFilesCloudPage;



 // rootPage: any = RegPage;


  //rootPage: any =  HelloIonicPage;



  constructor(
    public platform: Platform,
    public storage: Storage
  ) {

    
  }

  initializeApp() {
    this.platform.ready().then(() => {
      Splashscreen.hide();

    });
  

  }


}
