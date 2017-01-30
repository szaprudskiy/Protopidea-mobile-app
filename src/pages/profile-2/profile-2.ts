import { Component } from '@angular/core';
//import { Profile1Page } from './profile-1';
import { NavController, NavParams,ModalController,ViewController } from 'ionic-angular';
import { Profile3Page } from '../profile-3/profile-3';
import {Profile4PopupCameraGalleryPage} from '../profile-4-popup-camera-gallery/profile-4-popup-camera-gallery';
/*
  Generated class for the Profile2 page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-profile-2',
  templateUrl: 'profile-2.html'
})
export class Profile2Page {
  
  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController) {
 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Profile2Page');
  }

   goToProfile3() {
       this.navCtrl.push(Profile3Page);
    }

  adressdropdown = false;
  genderdropdown = false;
   clickAdress() {
    this.adressdropdown = !this.adressdropdown;
  }
  
    clickGender() {
    this.genderdropdown = !this.genderdropdown;
  }

  clickAvatar(){
    let uploadPhotoModal = this.modalCtrl.create(Profile4PopupCameraGalleryPage);
   uploadPhotoModal.present();
  }
}
