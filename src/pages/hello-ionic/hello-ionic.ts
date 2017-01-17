import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { IdeaCreatePage } from '../idea-create/idea-create';


@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  goToIdeaCreate(){
    this.navCtrl.push(IdeaCreatePage);
  }

}
