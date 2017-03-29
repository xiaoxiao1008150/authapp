import {Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Injectable()
export class MapService{
    private searchUrl: string;
    private placeUrl: string;
    private place_detailUrl: string;
    
    constructor(private _http:Http){}
    //get 
    getLocation(address:string){
        this.searchUrl = 'https://maps.googleapis.com/maps/api/geocode/json?address='+address+'&key=AIzaSyAQ7m-uSkDu-jX5SZzsTjXyedUt26aEHkk';
        return this._http.get(this.searchUrl)
            .map(res =>{
              // console.log('service',res.json())
              return res.json()
           });
    }
    //get 

   getPlaces(lat:number,lng:number,num:number){
     this.placeUrl = 'https://api.foursquare.com/v2/venues/search?client_id=SAF2UXLI1KDVKQI5LXPEHRJKBDCNLZYBLC2M3GWQMX152W3E&client_secret=PVPRZOVUUMFA1002KAZAIKXSVCT5JD3U1AGAJPCERZ3ORWIH&ll='+lat+','+lng+'&limit='+num+'&v=20170310&m=foursquare'
        return this._http.get(this.placeUrl)
            .map(res => res.json());
   }
    
   getSinglePlace(id:string){
     this.place_detailUrl = 'https://api.foursquare.com/v2/venues/'+id+'/photos?client_id=SAF2UXLI1KDVKQI5LXPEHRJKBDCNLZYBLC2M3GWQMX152W3E&client_secret=PVPRZOVUUMFA1002KAZAIKXSVCT5JD3U1AGAJPCERZ3ORWIH&v=20170314'
       return this._http.get(this.place_detailUrl)
            .map(res => res.json());
   }

 
}






