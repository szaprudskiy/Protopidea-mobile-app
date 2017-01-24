import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the IdeaCreate page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-idea-create',
  templateUrl: 'idea-create.html'
})
export class IdeaCreatePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.initializeCategories();
  }
  category = 'Category'
  categories: string[]
  searchQuery: string = ''
  showCat=false
  showCatList=false

  initializeCategories() {
    this.categories = [ "DIGITAL SERVICE","ELECTRONICS","GADGETS & ACCESSORIES","HEALTH CARE","HOBBYS & TOYS" ,"HOME & OFFICE","INDUSTRIAL","LUXURY GOODS" ,"PC & MOBILES","SCIENCES","SMART FOOD & BEVERAGES" ,"SMART PACKAGING","SMART WEARABLES","SOFTWARE & APPS","SPORT & OUTDOORS" ,"TECHNOLOGY","MOBILITY & TRANSPORT"
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IdeaCreatePage');
  }

  categorySearch(ev: any) {
    this.initializeCategories();
    let val = ev.target.value;
    console.log
    if (val && val.trim() != '') {
      this.categories = this.categories.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
  
  catTogle(){
    this.showCat=!this.showCat;
  }

  setCat(event : any){
    var val = event.target.value
    console.log(val);
    this.category = val;
  }

  catTogleList(){
    this.showCatList=!this.showCatList;
  }

}
