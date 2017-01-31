import { Component } from '@angular/core';
import { MenuController, NavController, NavParams, ModalController } from 'ionic-angular';
import { SubmenuPage } from '../submenu/submenu';
import { FindCollaboratorsPage } from '../find-collaborators/find-collaborators';
import { Profile1Page } from '../profile-1/profile-1';
import { TermsAndConditionsPage} from '../terms-and-conditions/terms-and-conditions';
import { PrivacyPolicyPage} from '../privacy-policy/privacy-policy';
import { UserController } from '../../providers/user-controller';


@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
  providers:[UserController]
})
export class MyPage {


//  constructor(public menuCtrl: MenuController) {



//  }
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public modalCtrl: ModalController,
               public userCtrl: UserController, ) {
  
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
    let shareModal = this.modalCtrl.create(TermsAndConditionsPage);
    shareModal.present();
  }

  openPrivacy()
  {
    let shareModal = this.modalCtrl.create(PrivacyPolicyPage);
    shareModal.present();
  }

  goToLogOut(){
    this.userCtrl.logout();
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