import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the IdeaCreate2 page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-idea-create2',
  templateUrl: 'idea-create2.html'
})
export class IdeaCreate2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad IdeaCreate2Page');
  }

  categorydrop  = false;
  inventiondrop = false;
  promotiondrop = false;

 clickCategory (){
     this.categorydrop = !this.categorydrop;
  }
   clickInvention (){
     this.inventiondrop = !this.inventiondrop;
  }
   clickPromotion (){
     this.promotiondrop = !this.promotiondrop;
  }

}
