import { Component } from '@angular/core';
<<<<<<< HEAD
import { MenuController, NavController, NavParams } from 'ionic-angular';
import { SubmenuPage } from '../submenu/submenu';
import { FindCollaboratorsPage } from '../find-collaborators/find-collaborators';
=======
import { MenuController } from 'ionic-angular';
import { NavController, NavParams } from 'ionic-angular';
>>>>>>> 7515ae82062e008e89146ca329a659b41ac62c97

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})
export class MyPage {

<<<<<<< HEAD
//  constructor(public menuCtrl: MenuController) {
=======
 constructor(public menuCtrl: MenuController,
             public navCtrl: NavController,) {
>>>>>>> 7515ae82062e008e89146ca329a659b41ac62c97

//  }
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
  }
  
   goToCollaborators() {
       this.navCtrl.push(FindCollaboratorsPage);
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