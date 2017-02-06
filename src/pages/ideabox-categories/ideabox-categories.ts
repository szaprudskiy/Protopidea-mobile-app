import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { IdeaboxController} from '../../providers/ideabox-controller'

/*
  Generated class for the IdeaboxCategories page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-ideabox-categories',
  templateUrl: 'ideabox-categories.html',
  providers: [IdeaboxController]
})
export class IdeaboxCategoriesPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public ideaCtrl: IdeaboxController,
              ) {
                 this.ideaCtrl.getCategories().then(data => {
                    this.categories = data;
                    console.log(this.categories)
                  });
              }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IdeaboxCategoriesPage');
  }

  categories : any

}
