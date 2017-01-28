import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RegPage} from '../reg-page/reg-page';

/*
  Generated class for the QuotesPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-quotes-page',
  templateUrl: 'quotes-page.html'
})
export class QuotesPagePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuotesPagePage');
    let random=Math.floor((Math.random() * 10));
    this.quote = this.quotes[random].quote;
    this.author = this.quotes[random].author;
    setTimeout(() => { // <=== 
        this.navCtrl.push(RegPage);
        this.navCtrl.setRoot(RegPage);
      }, 5000);
        }

  quotes:  any[] = [
                {
                   quote:"A Single Idea Can Change The World", 
                  author:"- Your friends at Protopidea"
                },
                {
                   quote:"It always seems impossible until its done", 
                  author:"- Nelson Mandela"
                },
                {
                   quote:"If You Can Dream It, You Can Do It", 
                  author:"- Walt Disney"
                },
                {
                   quote:"Great things in business are never done by one person. They're done by a team of people", 
                  author:"- Steve Jobs"
                },
                {
                   quote:"When something is important enough,you do it even if the odds are not in your favor", 
                  author:"- Elon Musk"
                },
                {
                   quote:"My model for business is The Beatles. They were four guys who kept each other's kind of negative tendencies in check. They balanced each other and the total was greater than the sum of the parts. That�s how I see business: great things in business are never done by on person, they are done by a team of people.", 
                  author:"- Steve Jobs"
                },
                {
                   quote:"You've got to make your team have value, innovation, and vision.", 
                  author:"- Jack Ma"
                },
                {
                   quote:"nvention is by its very nature disruptive. If you want to be understood at all times, then don't do anything new.", 
                  author:"- Jeff Bezos"
                },
                {
                    quote:"A person who never made a mistake never tried anything new.", 
                   author:"- Albert Einstein"
                },
                {
                    quote :"The best time to plant a tree was 20 years ago. The second best time is now.", 
                   author :"- Chinese proverb"
                }
            ]
            quote: any
           author: any
}
