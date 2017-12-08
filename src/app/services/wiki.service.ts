import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions} from '@angular/http';

import 'rxjs/Rx';

@Injectable()
export class WikiService {

   // APIKey:string = "373937260aa0697f912fe74d747c9201";

    constructor(public http:Http){

    }

    search(args:Object) {
        let query = this.buildQueryString("query", args);
        return this.http.get(query);
    }

    buildQueryString(method, args:Object) {
        let URL  = "https://en.wikipedia.org/w/api.php?action="+method+"&list=geosearch&gsradius=10000&format=json&origin=*&gscoord=56.8770413|14.8092744";
        return URL;
    }

}
