import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';


@Injectable()
export class FssearchService {
    ClientID:string = "BOI4GRNURNA3LB3033GVEWVIQ44RI1CTV401URK3QU1KMBCH";
    ClientSecretID:string = "PK2AFHZ1GJQK5BYFDCMZXGCRO3EXII13JYVQNV3DFSQHOBYI";


    constructor(public http: Http) { }

    getResults(keyword: string) {
     let url = "https://api.foursquare.com/v2/venues/search?client_id="+this.ClientID+"&client_secret="+this.ClientSecretID+"&v=20130815&ll=56.8770413,14.8092744&query=" + keyword;
        // let url = 'dist/php/CareerService.php?title=' + title;
      return this.http.get(url);
    }

}
