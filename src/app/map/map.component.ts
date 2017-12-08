import { Component, OnInit} from '@angular/core';

import { FlickrService } from '../services/flickr.service';
import { WikiService } from '../services/wiki.service';
import { YoutubeService } from '../services/youtube.service';
import { FbService } from '../services/facebook.service';
import { FoursquareService } from '../services/foursquare.service';



@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
    providers: [WikiService, YoutubeService]
})
export class MapComponent implements OnInit {

  DEFAULT_MAP_ZOOM = 14;
  DEFAULT_MAP_LAT = 56.8770413;
  DEFAULT_MAP_LNG = 14.8092744;
    customer = {};
  markers: Array<any> = [];

  constructor(public flickrService: FlickrService, public wikiService: WikiService, public youtubeService: YoutubeService, public foursquareService: FoursquareService, public fbService: FbService) {
     /* This function is taking call when user is searching in facebook widget via shared facebook service */
      this.fbService.componentMethodCalled$.subscribe(
          () => {
              let response = this.fbService.sharedFacebookData;
              this.markers.length = 0;
              this.DEFAULT_MAP_ZOOM = 13;
              for (let result of response){
                  let title = result.name;
                  let url = result.picture.data.url;
                  let lati = result.location.latitude;
                  let langi = result.location.longitude;
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

                  let titlecon = "<img src='" + url + "'>";
                  let gicon = "http://maps.google.com/mapfiles/ms/icons/blue.png";
                  let marker = {lat: lati,lang:langi,title:title, content:titlecon, icon:gicon, SERVICE:'FACEBOOK'};
                  this.markers.push(marker);
              }

          }
      );

      /* This function is taking call when user is searching in facebook widget via shared foursquare service */

      this.foursquareService.componentMethodCalledSq$.subscribe(
          () => {
              /* shared variable, assigning data from service page to inside function */
              let items_fs = this.foursquareService.sharedFoursquareData;
              this.markers.length = 0;
              this.DEFAULT_MAP_ZOOM = 13;
              for (let fsqitem of items_fs){
                  let lati = Number(fsqitem.location.lat);
                  let langi =  Number(fsqitem.location.lng);
                  let fsqid = fsqitem.id; // Assign ID for venue
                  let fsqname  = fsqitem.name;

             let titlecon = "<a href='https://foursquare.com/v/" + fsqid +"' target='_blank'>" + fsqname + "</a> <br />";
            let gicon = "http://maps.google.com/mapfiles/ms/icons/yellow.png";
             let marker = {lat: lati,lang:langi,title:fsqname.title,content:titlecon, icon:gicon, SERVICE:'FOUSRQUIRE'};
             this.markers.push(marker);


              }

          }
      );
  }


  ngOnInit() {
      this.initFlickr();
      this.initWiki();
      this.initYoutube();
      this.initFoursquare();
  }

  initFlickr() {
    let args: Object = {text: 'växjö', per_page: 100,has_geo: true};
    this.flickrService.search(args)
    .subscribe((response) => {
        let responseData = this.parseFlickrResponse(response['_body']);
        let items = responseData.photos.photo;

        for (let item of items){
          this.getLocationFromPhotos(item,item.id);}
        },
        error => console.error(error)
        )

	}

    getLocationFromPhotos(item,id) {
        this.flickrService.getLocation(id)
            .subscribe((response)=>{
                    let responseData = this.parseFlickrResponse(response['_body']);
                    let photos = responseData.photo;

                    this.appendToMap(item,responseData);
                },
                error => console.error(error)
            )
    }




    parseFlickrResponse(responseData){
      responseData = responseData.replace('jsonFlickrApi(', '');
      responseData = responseData.replace('})', '}');
      responseData = responseData.replace(/\\'/g, "'");

      return JSON.parse(responseData);
  }

  appendToMap(item,geoInfo){
      let lati = Number(geoInfo.photo.location.latitude);
      let langi =  Number(geoInfo.photo.location.longitude);
      let imgSrc = "<img src='http://farm" + item.farm + ".static.flickr.com/" + item.server + "/" + item.id + "_" + item.secret + "_q.jpg'>";

      let marker = {lat:lati,lang:langi,title:item.title,content:imgSrc, , SERVICE:'FLICKR'};
      this.markers.push(marker);
  }

    /* Wikipedia implementation  */

    initWiki() {

        let args:Object = {gscoord: this.DEFAULT_MAP_LAT|this.DEFAULT_MAP_LNG};
        this.wikiService.search(args)
            .subscribe((response) => {
                    let responseData = this.parseWikiResponse(response['_body']);
                    let items = responseData.query.geosearch;

                    for (let article of items){
                        let lati = Number(article.lat);  // assigning location info
                        let langi =  Number(article.lon);
                        let wikiPageId = article.pageid;
                        let wikititle = article.title;
                        let titlecon = "<a href='http://en.wikipedia.org/?curid=" + wikiPageId +"' target='_blank'>" + wikititle + "</a>";
                        let gicon = "http://maps.google.com/mapfiles/ms/icons/blue.png";

                        let marker = {lat: lati,lang:langi,title:article.title,content:titlecon, icon:gicon, SERVICE:'WIKIPEDIA'};
                        this.markers.push(marker);

                    }
                },
                error => console.error(error)
            )
    }
    parseWikiResponse(responseData){

        return JSON.parse(responseData);
    }


    /* FOUSRQUIRE implementation  */

    initFoursquare() {

        let args: Object = {ll: this.DEFAULT_MAP_LAT + this.DEFAULT_MAP_LNG};
        this.foursquareService.search(args)
            .subscribe((response) => {
                    let responseData = this.parseWikiResponse(response['_body']);
                    let items = responseData.response.venues;
                    for (let fsqitem of items){
                        let lati = Number(fsqitem.location.lat);
                        let langi =  Number(fsqitem.location.lng);
                        let fsqid = fsqitem.id; // Assign ID for venue
                        let fsqname  = fsqitem.name;
                       // let fsqlocation= fsqitem.location.address;
                        let titlecon = "<a href='https://foursquare.com/v/" + fsqid +"' target='_blank'>" + fsqname + "</a>"
                        let gicon = "http://maps.google.com/mapfiles/ms/icons/yellow.png";

                        let marker = {lat: lati,lang:langi,title:fsqname.title,content:titlecon, icon:gicon, SERVICE:'FOUSRQUIRE'};
                        this.markers.push(marker);

                    }
                },
                error => console.error(error)
            )
    }

    /* YOUTUBE implementation  */

    initYoutube() {
        let args: Object = {location: this.DEFAULT_MAP_LAT + this.DEFAULT_MAP_LNG};
        this.youtubeService.search(args)
            .subscribe((response) => {
                    let responseData = this.parseWikiResponse(response['_body']);
                    let items = responseData.items;

                    for (let item of items) {
                        let videoid = item.id.videoId;
                        let videotitle = item.snippet.title;
                        let videothumb = item.snippet.thumbnails.medium.url;
                        this.getLocationFromVideo(videoid, videotitle, videothumb);
                       // console.log(videoid);
                    }

                    },
                error => console.error(error)
            )
    }




    getLocationFromVideo(videoid, videotitle, videothumb) {
        /* second API call for getting geolocation information of video  */
        this.youtubeService.getLocation(videoid)
            .subscribe((response)=> {
                    let responseData = this.parseWikiResponse(response['_body']);
                    let items = responseData.items;
                for (let epvideodetails of items) {
                    let lati = Number(epvideodetails.recordingDetails.location.latitude);
                    let langi = Number(epvideodetails.recordingDetails.location.longitude);
                   let titlecon = "<a href='https://www.youtube.com/watch?v=" + videoid + "' target='_blank'>" + videotitle + "</a><br><br><a href='https://www.youtube.com/watch?v=" + videoid + "' target='_blank'><img width='80px' height='auto' src='" + videothumb + "'</a>";
                    let gicon = "http://maps.google.com/mapfiles/ms/icons/green.png";

                    let marker = {lat: lati, lang: langi, title: videotitle, content: titlecon, icon: gicon, SERVICE:'YOUTUBE'};
                    this.markers.push(marker);
                }
                },
                error => console.error(error)
            )
    }


    /* for category filtering. still not finished  */
    applyFilter(checkbox, boxid)
    {
        let tick = checkbox;
        // console.log(checkbox);
        console.log(this.markers);

        for (let item of this.markers) {


            if(item.SERVICE == boxid)

            {
                item.setVisible(tick);
                //console.log(item);
            }
        }
    }

}

