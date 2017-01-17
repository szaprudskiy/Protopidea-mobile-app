import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';
import {Keyboard} from 'ionic-native';
import { StatusBar, Splashscreen } from 'ionic-native';
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { RegPage} from '../pages/reg-page/reg-page';
import { IdeaCreatePage } from '../pages/idea-create/idea-create';
import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'app.html'
  
})
export class MyApp {

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
