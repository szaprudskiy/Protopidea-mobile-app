import { Component } from '@angular/core';
import { NavController, NavParams,ModalController,ViewController } from 'ionic-angular';
import { MyPage} from '../menu/menu';
import { Profile4PopupCameraGalleryPage} from '../profile-4-popup-camera-gallery/profile-4-popup-camera-gallery';
import { IdeaCreate2Page } from '../idea-create2/idea-create2';
import { IdeaboxListPage } from '../ideabox-list/ideabox-list';
import { Storage } from '@ionic/storage';
import {IdeaboxController}  from '../../providers/ideabox-controller'
import { Transfer } from 'ionic-native';
import { Http} from '@angular/http'
import { HTTP } from 'ionic-native';

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
              public ideaCtrl: IdeaboxController,
              public http: Http) {
              this.ideaCtrl.getCategories().then(data => {
                    this.categories = data;
                    console.log(data)
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
  category1 = {
      id :0,
      name: 'First Category'}
  category2 = {
      id :0,
      name: 'Second Category'}
  category3 = {
      id :0,
      name: 'Third Category'}
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
    var val = ev.target.value;
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
    var x = this.categories.find(cat => cat.id == val)
    this.category1 = x;
  }
  setCat2(event : any){
    var val = event.target.value
    console.log(val);
    var x = this.categories.find(cat => cat.id == val)
    this.category2 = x;
  }
  setCat3(event : any){
    var val = event.target.value
    console.log(val);
    var x = this.categories.find(cat => cat.id == val)
    this.category3 = x;
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
    let uploadPhotoModal = this.modalCtrl.create(Profile4PopupCameraGalleryPage);
    uploadPhotoModal.onDidDismiss(data => {
     this.idea.image = data;
      });
   uploadPhotoModal.present();
  }

  goPublic(){
    //const fileTransfer = new Transfer();
    var options = {
      fileKey: 'file',
      fileName: 'name.jpg',
      chunkedMode: false,
      //mimeType: "multipart/form-data",
      params : {'fileName': 'name.jpg'}
    }
      this.navCtrl.push( IdeaboxListPage );
      this.storage.get('ideas').then(val=>{
          val.push(this.idea);
          this.storage.set('ideas',val);
      });
      HTTP.post('http://protopidea.pdigit.top/en/api/ideas/create?access_token=MnTvRHONp556fFWMJWBBNFuk741RSV8yGUo7qTNh84oQJ7DISh9pctgjzJZNz2kZ2cYmhIQ9Put73aH4AfLkaq6GTcGK4L6dO2mGhWTjvcE9M63MwfNGzevMz2eAjixs',
                        {
                          category_1_id: this.category1.id,
                          category_2_id: this.category2.id,
                          category_3_id: this.category3.id,
                          name : this.idea.name,
                          scom: this.idea.promDesc,
                          com: this.idea.promDesc
                        },{})
                        .then(data=>{
                            alert(JSON.stringify(data))
                            /*fileTransfer.upload(this.idea.image,'http://protopidea.pdigit.top/en/api/ideas/edit',options).then(data=>{
                              alert(JSON.stringify(data))},
                            error=> {
                              alert(JSON.stringify(error))},
                            )*/
                        }).catch(error => {
                            alert(JSON.stringify(error))
                        });
  }
  
  goToIdeaList(){
    this.navCtrl.push( IdeaboxListPage,{},{animate: true, direction: 'left', });
  }
  
  comingSoon(){
    alert('Coming soon!')
  }
}
