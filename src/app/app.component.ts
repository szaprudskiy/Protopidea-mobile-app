import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';
import {Keyboard} from 'ionic-native';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ListPage } from '../pages/list/list';
import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'app.html'
  
})
export class MyApp {

  rootPage: any = HelloIonicPage;

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
