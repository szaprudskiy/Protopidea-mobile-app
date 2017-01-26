import { Component } from '@angular/core';
import { MenuController, NavController, NavParams } from 'ionic-angular';
import { SubmenuPage } from '../submenu/submenu';
import { FindCollaboratorsPage } from '../find-collaborators/find-collaborators';


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