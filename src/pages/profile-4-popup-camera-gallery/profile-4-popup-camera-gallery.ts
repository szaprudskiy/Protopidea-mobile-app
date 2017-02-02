import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { ImagePicker } from 'ionic-native';
import { Camera } from 'ionic-native';

/*
  Generated class for the Profile4PopupCameraGallery page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-profile-4-popup-camera-gallery',
  templateUrl: 'profile-4-popup-camera-gallery.html'
})
export class Profile4PopupCameraGalleryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad Profile4PopupCameraGalleryPage');
  }

  image: any

  uploadFromGallery(){
    let options ={maximumImagesCount:1}
    if (ImagePicker.hasReadPermission()){
      ImagePicker.getPictures(options).then((results) => {
        for (var i = 0; i < results.length; i++) {
            this.viewCtrl.dismiss(results[i]);
        }
    }, (err) => { alert(err)});
    } else
    {
      ImagePicker.requestReadPermission();
      ImagePicker.getPictures(options).then((results) => {
        for (var i = 0; i < results.length; i++) {
            this.viewCtrl.dismiss(results[i]);
        }
    }, (err) => { alert(err)});
    }
  }

  uploadFromCamera(){
    Camera.getPicture().then((imageData) => {
      this.viewCtrl.dismiss(imageData);
      }, (err) => {
      // Handle error
      });
  }


}
