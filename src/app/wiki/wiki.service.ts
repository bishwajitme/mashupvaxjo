import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';


@Injectable()
export class WikiService {

  constructor(public http: Http) { }

    getResults(wikikeyword: string) {
      let url = "https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&list=search&srlimit=5&srsearch=" + wikikeyword;
      return this.http.get(url);
    }

}
