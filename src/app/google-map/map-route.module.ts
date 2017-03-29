import { NgModule }            from '@angular/core';
import { RouterModule }        from '@angular/router';

import { GoogleMapComponent }    from './google-map.component';
import { PlaceDetailComponent }    from './place-detail.component';


@NgModule({
  imports: [RouterModule.forChild([
    { path: 'map', component: GoogleMapComponent},
    { path: 'place/:id', component: PlaceDetailComponent }
  ])
  ],
  exports: [RouterModule]
})
export class GoogleMapRoutingModule {}