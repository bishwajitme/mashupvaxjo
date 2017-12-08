import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions} from '@angular/http';
import { Subject } from 'rxjs/Subject';

import 'rxjs/Rx'; 

@Injectable()

export class FbService {

    public sharedFacebookData = {};
    private componentMethodCallSource = new Subject<any>();
    componentMethodCalled$ = this.componentMethodCallSource.asObservable();
    callComponentMethod() {
        this.componentMethodCallSource.next();

    }
    constructor(public http: Http) { }

    getResults(keyword: string) {

        let url = "https://graph.facebook.com/v2.11/search?type=place&q="+keyword+"&center=56.8770413,14.8092744&distance=1000&fields=name,checkins,picture,description,location,hours&access_token=2040144306206867|23e390ccd395736bfc12c2fd5cec9297";

        // API call
        return this.http.get(url);
    }

}


