import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MyPage } from '../menu/menu';
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
  clickbackmenu(){
    this.navCtrl.pop(MyPage);
  }
    collaboratorsdrop = false;
    itdrop = false;
    itemsdrop = false;

 clickCollaborators(){
     this.collaboratorsdrop = !this.collaboratorsdrop;

  }
  
  clickIt(){
     this. itdrop = !this. itdrop;
  }

  clickSience(){
    this. itemsdrop = !this. itemsdrop;
  }

}
