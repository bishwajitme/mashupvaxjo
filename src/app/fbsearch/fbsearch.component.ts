import {Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, Output, EventEmitter} from '@angular/core';

import { FbsearchResultComponent } from './fbsearch-result.component';

import { FbService } from '../services/facebook.service';

import { MapComponent } from '../map/map.component';

@Component({
  selector: 'app-fbsearch',
  templateUrl: './fbsearch.component.html'
})
export class FbsearchComponent implements OnInit {

  @ViewChild('target', {read: ViewContainerRef}) target:any;
    mapref: MapComponent;


  cmpArray:Array<any> = []
  cmpRefArray:Array<any> = []
  noResult:boolean = false;

  constructor(public fbService: FbService,
              public resolver: ComponentFactoryResolver) {

  }

  ngOnInit() {
  }

  onSearch(input) {
    let keyword = input.value || input.placeholder;

    this.fbService.getResults(keyword)
          .subscribe((response)=>{
                  let responseData = this.parseResponse(response['_body']);
                  let items = responseData.data;
                  this.fbService.sharedFacebookData = responseData.data;
                  this.fbService.callComponentMethod();
             this.onSearchResultsComplete(items);

          },
          error => console.error(error)
        )
    }

    parseResponse(responseData){

        return JSON.parse(responseData);
    }

    onSearchResultsComplete(response) {

        for (let i of this.cmpRefArray) {
            i.destroy();
        }

      if(response == 'null'){
        this.noResult = true;
      }
      else { 
        this.noResult = false;

          for (let result of response){
            var n = result.name;
            var c = result.checkins;
            var u = result.picture.data.url;
            var id = result.id;
              var lat = result.location.latitude;
              var lon = result.location.longitude;
            var description = result.description;
              let location = '';
              if(result.location.street !== undefined) {
                 location += result.location.street + ' ';
              }
              if(result.location.zip !== undefined) {
                   location += result.location.zip + ' ';
              }
              if(result.location.city !== undefined) {
                  location += result.location.city;
              }



            this.createComponent(n,c,u,id,description, location, lat, lon);
        }
      }  
    }

    createComponent(n:string,c:string,u:string,id:string, description:string, location:string, lat:string, lon:string)
    {
        let newComp = this.resolver.resolveComponentFactory(FbsearchResultComponent);
        let cmpRef = this.target.createComponent(newComp);
        let cmp              = cmpRef.instance;
            cmp.name      = n;
            cmp.checkin        = c;
            cmp.url  = u;
            cmp.id          = id;
        cmp.description          = description;
        cmp.location          = location;
        cmp.lat          = lat;
        cmp.lon          = lon;

        this.cmpRefArray.push(cmpRef);
        this.cmpArray.push(cmp);
    }
}

