import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home',  pathMatch: 'full'},
  { path:'home',component:HomeComponent },
  { path: 'map', loadChildren: 'app/google-map/google-map.module#GoogleMapModule' },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}