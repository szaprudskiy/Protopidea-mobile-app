import { Component } from '@angular/core';
import { MenuController } from 'ionic-angular';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})
export class MyPage {

 constructor(public menuCtrl: MenuController,
             public navCtrl: NavController,) {

 }

 openMenu() {
   this.menuCtrl.open();
 }

 closeMenu() {
   this.menuCtrl.close();
 }

 toggleMenu() {
   this.menuCtrl.toggle();
 }

 back(){
   this.navCtrl.pop();
 }
}