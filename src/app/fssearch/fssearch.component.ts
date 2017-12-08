import {Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, Output, EventEmitter} from '@angular/core';

import { FssearchResultComponent } from './fssearch-result.component';
import { MapComponent } from '../map/map.component';

import { FoursquareService } from '../services/foursquare.service';


@Component({
  selector: 'app-fssearch',
  templateUrl: './fssearch.component.html'
})
export class FssearchComponent implements OnInit {

  @ViewChild('target', {read: ViewContainerRef}) target:any;
    mapref: MapComponent;


  cmpArrayFs:Array<any> = []
  cmpRefArrayFs:Array<any> = []
  noResult:boolean = false;

  constructor(public fssearchService: FoursquareService,
              public resolver: ComponentFactoryResolver) {

  }

  ngOnInit() {
  }

  onSearch(input) {
    let keyword = input.value || input.placeholder;
      let args:Object = {query: keyword};
    this.fssearchService.searchByTerm(args)
          .subscribe((response)=>{
                  let responseData = this.parseResponse(response['_body']);
                  let items = responseData.response.venues;
                  this.fssearchService.sharedFoursquareData = responseData.response.venues;
                  this.fssearchService.callComponentMethod();
             this.onSearchResultsComplete(items);

          },
          error => console.error(error)
        )
    }

    parseResponse(responseData){

        return JSON.parse(responseData);
    }

    onSearchResultsComplete(response) {

        for (let i of this.cmpRefArrayFs) {
            i.destroy();
        }

      if(response == 'null'){
        this.noResult = true;
      }
      else { 
        this.noResult = false;

          for (let result of response){
            let n = result.name;
            let c = result.stats.checkinsCount;

            let fid = result.id;
              let lat = result.location.lat;
              let lon = result.location.lng;
              let photo_url = '';
              this.fssearchService.photoSearch(fid)
                  .subscribe((response) => {

                          let responseData = this.parseResponse(response['_body']);
                          let photos = responseData.response.photos.items;

                          for (let photoitem of photos) {
                              let prefix = photoitem.prefix;
                              let suffix =  photoitem.suffix;
                              photo_url = prefix + "100x100" + suffix;

                          }
                      this.createComponent(n,c,fid, lat, lon, photo_url);
                      },
                  )

        }
      }  
    }

    createComponent(n:string,c:string,id:string, lat:string, lon:string, photo_url: string)
    {
        let newComp = this.resolver.resolveComponentFactory(FssearchResultComponent);
        let cmpRef = this.target.createComponent(newComp);
        let cmp              = cmpRef.instance;
            cmp.fsname      = n;
            cmp.fscheckin        = c;

            cmp.fsid          = id;
        cmp.fslat          = lat;
        cmp.fslon          = lon;
        cmp.photo_url          = photo_url;

        this.cmpRefArrayFs.push(cmpRef);
        this.cmpArrayFs.push(cmp);
    }
}

