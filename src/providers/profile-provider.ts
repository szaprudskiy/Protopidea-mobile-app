import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ProfileProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ProfileProvider {

  constructor(public http: Http) {
    console.log('Hello ProfileProvider Provider');
  }

  getCountries(){
    let countries ={}
    return new Promise( resolve=>{
          this.http.get('http://protopidea.pdigit.top/en/api/countries/list')
          .map(res => res.json())
          .subscribe(data=> {
            countries = data
            resolve(countries);
          });
    })
  }
  

  getLanguages(){
     let languages ={}
    return new Promise( resolve=>{ 
      this.http.get('http://protopidea.pdigit.top/en/api/languages/list')
                .map(res => res.json())
                .subscribe(data => {
                  languages=data
                  resolve(data)
                })
             });
    }
}
