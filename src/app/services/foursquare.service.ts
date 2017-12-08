import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions} from '@angular/http';
import { Subject } from 'rxjs/Subject';
import 'rxjs/Rx';

@Injectable()
export class FoursquareService {

    ClientID:string = "BOI4GRNURNA3LB3033GVEWVIQ44RI1CTV401URK3QU1KMBCH";
    ClientSecretID:string = "PK2AFHZ1GJQK5BYFDCMZXGCRO3EXII13JYVQNV3DFSQHOBYI";
    public sharedFoursquareData = {};
    private componentMethodCallSq = new Subject<any>();
    componentMethodCalledSq$ = this.componentMethodCallSq.asObservable();
    callComponentMethod() {
        this.componentMethodCallSq.next();
        console.log(this.sharedFoursquareData);
    }
    constructor(public http:Http){

    }

    search(args:Object) {
        let query = this.buildQueryString("search", args);
        return this.http.get(query);
    }

    buildQueryString(method, args:Object) {
        let URL  = "https://api.foursquare.com/v2/venues/"+method+"?client_id="+this.ClientID+"&client_secret="+this.ClientSecretID+"&v=20130815&ll=56.8770413,14.8092744";
        return URL;
    }


    searchByTerm(args:Object) {
        let query = this.buildQueryStringSearch("search", args);
        return this.http.get(query);
    }
    buildQueryStringSearch(method, args:Object) {
        let URL  = "https://api.foursquare.com/v2/venues/"+method+"?client_id="+this.ClientID+"&client_secret="+this.ClientSecretID+"&v=20130815&ll=56.8770413,14.8092744&radius=20000&limit=100";
        for (let property in args) {
            URL += "&"+property+"="+args[property];
        }
        console.log(URL);
        return URL;
    }

    /* searching FOURSQUARE photo by api call */
    photoSearch(photoID) {
        let URL  = "https://api.foursquare.com/v2/venues/" + photoID + "/photos?client_id=BOI4GRNURNA3LB3033GVEWVIQ44RI1CTV401URK3QU1KMBCH&client_secret=PK2AFHZ1GJQK5BYFDCMZXGCRO3EXII13JYVQNV3DFSQHOBYI&v=20130815";
        //console.log(URL);
        return this.http.get(URL);
    }

}
