import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad Profile4PopupCameraGalleryPage');
  }

  uploadFromGallery(){
    let options ={maximumImagesCount:1}
    ImagePicker.requestReadPermission();
    if (ImagePicker.hasReadPermission()){
      ImagePicker.getPictures(options).then((results) => {
        for (var i = 0; i < results.length; i++) {
            alert('Image URI: ' + results[i]);
        }
    }, (err) => { alert(err)});
    } else
    {
      ImagePicker.requestReadPermission();
      ImagePicker.getPictures(options).then((results) => {
        for (var i = 0; i < results.length; i++) {
            alert('Image URI: ' + results[i]);
        }
    }, (err) => { alert(err)});
    }
  }

  uploadFromCamera(){
    Camera.getPicture().then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      alert(base64Image);
      }, (err) => {
      // Handle error
      });
  }



}
