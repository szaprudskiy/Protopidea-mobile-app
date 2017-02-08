import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { IdeaboxListPage } from '../ideabox-list/ideabox-list';
import { MyPage } from '../menu/menu';
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

  idea = {
    image:'assets/img/upload-photo.png',
    name:'',
    title:'',
    briefDesc:'',
    promDesc:'',
    categories: [],
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //this.idea = navParams.get('idea');
  }


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
  
goToIdeaList(){
    this.navCtrl.push( IdeaboxListPage );
  }
  

}
