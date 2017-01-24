import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the FindCollaborators page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/

@Component({
  selector: 'page-find-collaborators',
  templateUrl: 'find-collaborators.html'
})

export class FindCollaboratorsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad FindCollaboratorsPage');
  }

    collaboratorsdrop = false;

 clickCategory (){
     this.collaboratorsdrop = !this.collaboratorsdrop;
  }

}
