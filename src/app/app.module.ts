import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { BrowserModule } from '@angular/platform-browser';
 
import { OtherPage } from '../pages/other/other';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
 
@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    OtherPage,
    HomePage,
    AboutPage,
    ContactPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    BrowserModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    OtherPage,
    HomePage,
    AboutPage,
    ContactPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}