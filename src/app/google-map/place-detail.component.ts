
import { Component, OnInit } from '@angular/core';
import { MapService } from './map.service';
import { Subject } from 'rxjs/Subject';
import { Location } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'place-detail',
  template: `
   <div id='card'>
      <md-card>
        <md-card-title>
          图片
        </md-card-title>
        <img md-card-image *ngIf='placePhoto' src="{{placePhoto.prefix}}300x300{{placePhoto.suffix}}"  alt="" />
        <md-card-actions align="end"> 
          <button md-raised-button color="primary" (click)='goBack()'>goback</button>
        </md-card-actions> 
       </md-card>
   </div>
  
  `,
  styles:[`
    img{width:250px;height:250px}
    #card{display:flex}
    md-card{margin:auto;margin-top:20px;padding:40px}

  `]
})
export class PlaceDetailComponent implements OnInit{
  term$ = new Subject<string>();
  error:string;
  selectedPlace:string;
  placePhoto:any;
  constructor(private _mapService:MapService,
   private location: Location,
   private route: ActivatedRoute) { 
    // this.term$.debounceTime(500).subscribe(term =>this.getLocation(term))
  }


  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this._mapService.getSinglePlace(params['id']))
      .subscribe(photo => {
        if(photo.response.photos.items==[]){
          return ''
        }else{
          this.placePhoto = photo.response.photos.items[0];
          console.log('place0',this.placePhoto)
        }

        
      });
  }

  // getSinglePlace(id:string){
  //     this._mapService.getSinglePlace(id)
  //         .subscribe(res => {
  //             this.place= res.response.venues;
  //             console.log('place',this.place)
  //           }
  //        )
  // }

  goBack(){
    this.location.back();
    // console.log(JSON.parse(localStorage.getItem('places')))
  }
 


}















