import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';
import {Keyboard} from 'ionic-native';
import { StatusBar, Splashscreen } from 'ionic-native';
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { Profile1Page } from '../pages/profile-1/profile-1';
import { Profile2Page } from '../pages/profile-2/profile-2';
import { NavController } from 'ionic-angular';


@Component({
  templateUrl: 'app.html'
  
})
export class MyApp {
  @ViewChild('myNav') nav: NavController

  rootPage: any = Profile2Page;

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
