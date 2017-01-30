import { Component } from '@angular/core';
import { MenuController, NavController, NavParams } from 'ionic-angular';
import { SubmenuPage } from '../submenu/submenu';
import { FindCollaboratorsPage } from '../find-collaborators/find-collaborators';
import { Profile1Page } from '../profile-1/profile-1';
import { TermsAndConditionsPage} from '../terms-and-conditions/terms-and-conditions';


@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})
export class MyPage {


//  constructor(public menuCtrl: MenuController) {



//  }
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
  }
  
  goToCollaborators() {
       this.navCtrl.push( FindCollaboratorsPage );
    }

  goToSettings() {
       this.navCtrl.push(SubmenuPage);
    }
  
  goToProfile() {
    this.navCtrl.push(Profile1Page);
  }

  goToTerms(){
    this.navCtrl.push(TermsAndConditionsPage);
  }

//  openMenu() {
//    this.menuCtrl.open();
//  }

//  closeMenu() {
//    this.menuCtrl.close();
//  }

//  toggleMenu() {
//    this.menuCtrl.toggle();
//  }

 back(){
   this.navCtrl.pop();
 }
}