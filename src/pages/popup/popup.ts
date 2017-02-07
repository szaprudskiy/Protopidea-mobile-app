import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { TermsAndConditionsPage } from '../terms-and-conditions/terms-and-conditions';
import { PrivacyPolicyPage } from '../privacy-policy/privacy-policy'

/*
  Generated class for the Popup page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-popup',
  templateUrl: 'popup.html'
})
export class PopupPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public modalCtrl: ModalController,
              public viewCtrl:ViewController ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopupPage');
  }

  close(){
    this.viewCtrl.dismiss();
  }

  goToTerms(){
    var terms = this.modalCtrl.create(TermsAndConditionsPage)
    terms.present()
  }

  goToPolicy(){
    var terms = this.modalCtrl.create(PrivacyPolicyPage)
    terms.present()
  }
}
