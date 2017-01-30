import { Component } from '@angular/core';
import { NavController, NavParams,ModalController,ViewController} from 'ionic-angular';
import {Profile4PopupCameraGalleryPage} from '../profile-4-popup-camera-gallery/profile-4-popup-camera-gallery';


/*
  Generated class for the Profile3 page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-profile-3',
  templateUrl: 'profile-3.html'
})
export class Profile3Page {

  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad Profile3Page');
  }

  clickAvatar(){
    let uploadPhotoModal = this.modalCtrl.create(Profile4PopupCameraGalleryPage);
   uploadPhotoModal.present();
  }
}
