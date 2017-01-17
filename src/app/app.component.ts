import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';
import {Keyboard} from 'ionic-native';
import { StatusBar, Splashscreen } from 'ionic-native';
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { RegPage} from '../pages/reg-page/reg-page';
import { IdeaCreatePage } from '../pages/idea-create/idea-create';
import { Profile1Page } from '../pages/profile-1/profile-1';
import { Profile2Page } from '../pages/profile-2/profile-2';
import { Profile3Page } from '../pages/profile-3/profile-3';
import { Profile4PopupCameraGalleryPage } from '../pages/profile-4-popup-camera-gallery/profile-4-popup-camera-gallery';
import { Profile5UserProfilePage } from '../pages/profile-5-user-profile/profile-5-user-profile';
import { Profile6PopupProfilePage } from '../pages/profile-6-popup-profile/profile-6-popup-profile';
import { Profile7LogoutPage } from '../pages/profile-7-logout/profile-7-logout';
import { NavController } from 'ionic-angular';




@Component({
  templateUrl: 'app.html'
  
})
export class MyApp {
  @ViewChild('myNav') nav: NavController

  rootPage: any = RegPage;


  constructor(
    public platform: Platform,
  ) {

    
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      Splashscreen.hide();
    });
  

  }


}
