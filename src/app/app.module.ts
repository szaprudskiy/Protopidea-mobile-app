import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
//import { ItemDetailsPage } from '../pages/item-details/item-details';
//import { ListPage } from '../pages/list/list';
import { Profile1Page } from '../pages/profile-1/profile-1';
import { Profile2Page } from '../pages/profile-2/profile-2';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    //ItemDetailsPage,
    //ListPage
    Profile1Page,
    Profile2Page
  ],
  imports: [
    IonicModule.forRoot(MyApp, { scrollAssist: false, autoFocusAssist: false })
  ],
  bootstrap: [
    IonicApp,
    
  
  ],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    //ItemDetailsPage,
    //ListPage
    Profile1Page,
    Profile2Page
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
