import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule} from 'angularfire2';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AuthService } from './providers/auth.service';
//ng2 material
import { MaterialModule } from '@angular/material';
import { DialogOverviewExampleDialog } from './app.component';
import 'hammerjs';



//feature  Module
import { GoogleMapModule } from './google-map/google-map.module'

//routing module

import { AppRoutingModule}   from './app-route.module';


export const firebaseConfig = {
    apiKey: "AIzaSyCrPKhJVWOeTcDVuk9IaYIcILGBbHSfiA8",
    authDomain: "myauthapp-a3b1a.firebaseapp.com",
    databaseURL: "https://myauthapp-a3b1a.firebaseio.com",
    storageBucket: "myauthapp-a3b1a.appspot.com",
    messagingSenderId: "649389728596"
  };



@NgModule({
  declarations: [
    AppComponent,
    DialogOverviewExampleDialog,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    GoogleMapModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    MaterialModule,  
  ],
 entryComponents: [DialogOverviewExampleDialog],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
