import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { RegPage} from '../pages/reg-page/reg-page';
import { IdeaCreatePage } from '../pages/idea-create/idea-create';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    RegPage,
    IdeaCreatePage,
    //ItemDetailsPage,
    //ListPage
  ],
  imports: [
    IonicModule.forRoot(MyApp, { scrollAssist: false, autoFocusAssist: false })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    RegPage,
    IdeaCreatePage,
    //ItemDetailsPage,
    //ListPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
