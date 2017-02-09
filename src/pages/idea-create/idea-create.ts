import { Component } from '@angular/core';
import { NavController, NavParams,ModalController,ViewController } from 'ionic-angular';
import { MyPage} from '../menu/menu';
import { Profile4PopupCameraGalleryPage} from '../profile-4-popup-camera-gallery/profile-4-popup-camera-gallery';
import { IdeaCreate2Page } from '../idea-create2/idea-create2';
import { IdeaboxListPage } from '../ideabox-list/ideabox-list';
import { Storage } from '@ionic/storage';
import {IdeaboxController}  from '../../providers/ideabox-controller'
import { Transfer } from 'ionic-native';

/*
  Generated class for the IdeaCreate page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-idea-create',
  templateUrl: 'idea-create.html',
  providers: [IdeaboxController]
})
export class IdeaCreatePage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modalCtrl: ModalController,
              public storage: Storage,
              public ideaCtrl: IdeaboxController) {
              this.ideaCtrl.getCategories().then(data => {
                    this.categories = data;
                  });
  }


  idea = {
    image:'assets/img/upload-photo.png',
    name:'',
    title:'',
    briefDesc:'',
    promDesc:'',
    categories: [],
  }
  category1 = 'First Category'
  category2 = 'Second Category'
  category3 = 'Third Category'
  categories: any
  search: any
  searchQuery: string = ''
  showCat1=false
  showCatList=false
  showCat2=false
  showCat3=false
  showDesc=false
  showProDesc=false

  goToMenu(){
    this.navCtrl.push(MyPage);
  }
  initializeCategories() {
    this.search = this.categories
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
  
  catTogle1(){
    this.showCat1 = !this.showCat1;
  }
  catTogle2(){
    this.showCat2 = !this.showCat2;
  }
  catTogle3(){
    this.showCat3 = !this.showCat3;
  }
  setCat1(event : any){
    var val = event.target.value
    console.log(val);
    this.category1 = val;
  }
  setCat2(event : any){
    var val = event.target.value
    console.log(val);
    this.category2 = val;
  }
  setCat3(event : any){
    var val = event.target.value
    console.log(val);
    this.category3 = val;
  }

  catTogleList(){
    this.showCatList=!this.showCatList;
  }

  focusDesc(){
    this.showDesc=!this.showDesc;
  }

  focusPromDesc(){
    this.showProDesc=!this.showProDesc;
  }

  modalUploadPhoto(){
    const fileTransfer = new Transfer();
    var options = {
      fileKey: 'file',
      fileName: 'name.jpg',
      headers: {}
    }
    let uploadPhotoModal = this.modalCtrl.create(Profile4PopupCameraGalleryPage);
    uploadPhotoModal.onDidDismiss(data => {
     this.idea.image = data;
     fileTransfer.upload(this.idea.image,'',options).then(data=>{
          alert(JSON.stringify(data))},
        error=> {
           alert(JSON.stringify(error))},
        )
      });
   uploadPhotoModal.present();
  }

  goPublic(){
      this.navCtrl.push( IdeaboxListPage );
      this.storage.get('ideas').then(val=>{
          val.push(this.idea);
          this.storage.set('ideas',val);
      });
  }
  
  goToIdeaList(){
    this.navCtrl.push( IdeaboxListPage,{},{animate: true, direction: 'left', });
  }
  
}
