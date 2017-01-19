import { Component } from '@angular/core';
import { Profile2Page } from '../profile-2/profile-2';
import { NavController, NavParams } from 'ionic-angular';


/*
  Generated class for the Profile1 page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-profile-1',
  templateUrl: 'profile-1.html',
})
export class Profile1Page {
 

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
  }

   formskill = false;
    langdropdown = false;
  ionViewDidLoad() {
    console.log('ionViewDidLoad Profile1Page');
  }
  
   goToProfile2() {
       this.navCtrl.push(Profile2Page);
    }

  clickSkills() {
    this.formskill = !this.formskill;
  }
    clickLanguage() {
    this.langdropdown = !this.langdropdown;
  }
}
