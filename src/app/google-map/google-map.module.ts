import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import { HttpModule } from '@angular/http';

import { GoogleMapComponent }    from './google-map.component';
import { PlaceDetailComponent }    from './place-detail.component';

import { GoogleMapRoutingModule }   from './map-route.module';
//google map
import { AgmCoreModule } from 'angular2-google-maps/core';

import { MapService }     from './map.service';
import { MaterialModule } from '@angular/material';

import { InfiniteScrollModule } from 'angular2-infinite-scroll';

// import { OrderFoodModule } from '.././order-food/order-food.module';

@NgModule({
  imports:      [ 
   CommonModule,
   FormsModule,
   HttpModule,
   GoogleMapRoutingModule ,
   MaterialModule,
   InfiniteScrollModule,
   AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAQ7m-uSkDu-jX5SZzsTjXyedUt26aEHkk'
   })
   ],
  declarations: [ GoogleMapComponent,PlaceDetailComponent],
  providers:    [ MapService ]
})
export class GoogleMapModule { 
  
}