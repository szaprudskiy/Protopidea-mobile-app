import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the IdeaboxController provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class IdeaboxController {

  constructor(public http: Http) {
    console.log('Hello IdeaboxController Provider');
  }

  getCategories(){
    let categories ={}
    return new Promise( resolve=>{
          this.http.get('http://protopidea.pdigit.top/en/api/categories/list')
          .map(res => res.json())
          .subscribe(data=> {
            categories = data
            resolve(categories);
          });
    })
  }
}
