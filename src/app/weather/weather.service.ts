import { Injectable } from '@angular/core';

import { Http, Response} from '@angular/http';

import 'rxjs/Rx';

@Injectable()
export class WeatherService {

  constructor(public http: Http) {}

  getWheather() {
      let url = 'http://api.wunderground.com/api/cc988597833ce2b4/forecast/q/Sweden/vaxjo.json';
      return this.http.get(url)
            .map((res: Response) => res.json());
  }

}
