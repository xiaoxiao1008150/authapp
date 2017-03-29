import { Component, OnInit } from '@angular/core';
import { MapService } from './map.service';
import { Subject } from 'rxjs/Subject';
import { Router } from '@angular/router';

import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})
export class GoogleMapComponent implements OnInit{
  throttle = 300;
  scrollDistance = 2;
  location:any;
  error:string;
  selectedPlace:any;
  address:string = '';
  zoom: number = 15;
  // initial center position for the map
  lat: number = 31.230416;
  lng: number = 121.473701;
  places:any;
  num :number = 10;



  constructor(private _mapService:MapService,
        private router: Router) { 
     
  }


    getLocation(){         
          this._mapService.getLocation(this.address)
              .subscribe(res => {
                this.location = res;
                if(res.status =='OK'){
                  this.location = res.results[0].geometry.location;
                  this.lat = this.location.lat;
                  this.lng = this.location.lng;
                  this.getPlaces(this.lat,this.lng,this.num);
                }else{
                  this.error = '请重新输入地址！'
                }  
              })
      }


    getPlaces(lat:number,lng:number,num:number){
        this._mapService.getPlaces(lat,lng,num)
            .subscribe(res => {
                this.places= res.response.venues;
              }
           )
    }

  onSelect(place){
    this.router.navigate(['/place',place.id]);
    sessionStorage.setItem('places',JSON.stringify(this.places)) 
    sessionStorage.setItem('address',this.address) 
  }

  ngOnInit(){
    this.places = JSON.parse(sessionStorage.getItem('places'));
    this.address = sessionStorage.getItem('address');
  }


  onScrollDown () {
    this.num +=10;
    this.getLocation()

  }


  

  




}















