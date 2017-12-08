import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions} from '@angular/http';

import 'rxjs/Rx'; 

@Injectable()
export class YoutubeService {

  APIKey:string = "AIzaSyABc5RAHJno_ZuJ07Ua32WTrMJR82oS_Us";

    constructor(public http:Http) {

    }

  search(args:Object) {
    let query = this.buildQueryString("snippet", args);

    return this.http.get(query);
  }

    buildQueryString(method, args:Object) {
        let URL  = "https://www.googleapis.com/youtube/v3/search?part="+method+"&key="+this.APIKey+"&locationRadius=15km&maxResults=50&order=date&type=video&location=56.8770413%2C+14.8092744";
        return URL;
    }

    /* searching geolocation info for video by api call */

    getLocation(id) {
        let vid = {id};
        let url  = "https://www.googleapis.com/youtube/v3/videos?part=recordingDetails&key="+this.APIKey+"&id="+id;

        return this.http.get(url);
    };

}