/**
 * Loads all the modules, Components and services used in app.
 */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { MapComponent } from './map/map.component';
import { WeatherComponent } from './weather/weather.component';
import { CompareComponent } from './compare/compare.component';
import { CompareResultComponent } from './compare/compare-result.component';

import { FlickrService } from './services/flickr.service';
import { WeatherService } from './weather/weather.service';
import { CompareService } from './compare/compare.service';
import { CareerService } from './career/career.service';
import { FbsearchService } from './fbsearch/fbsearch.service';
import { FssearchService } from './fssearch/fssearch.service';
import { WikiService } from './wiki/wiki.service';
import { FbService } from './services/facebook.service';
import { FoursquareService } from './services/foursquare.service';
import { YoutubeService } from './services/youtube.service';

import { DatepickerModule } from 'angular2-material-datepicker';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { CareerComponent } from './career/career.component';
import { CareerResultComponent } from './career/career-result.component';
import {FbsearchComponent} from './fbsearch/fbsearch.component';
import {FbsearchResultComponent} from './fbsearch/fbsearch-result.component';
import {FssearchComponent} from './fssearch/fssearch.component';
import {FssearchResultComponent} from './fssearch/fssearch-result.component';
import { WikiResultComponent } from './wiki/wiki-result.component';
import { WikiComponent } from './wiki/wiki.component';
import { YoutubeResultComponent } from './youtube/youtube-result.component';
import { YoutubeComponent } from './youtube/youtube.component';


@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    WeatherComponent,
    CompareComponent,
    CompareResultComponent,
    CareerComponent,
    CareerResultComponent,
      FbsearchComponent,
      FbsearchResultComponent,
      FssearchComponent,
      FssearchResultComponent,
      WikiComponent,
      WikiResultComponent,
      YoutubeComponent,
      YoutubeResultComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DatepickerModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBww6_B9bJvbagRkbz1aiX6SasIU1TIu28'
    })
  ],
  providers: [WeatherService, FlickrService, CompareService, CareerService, FbsearchService, FssearchService, WikiService, FbService, FoursquareService, YoutubeService],
  entryComponents: [AppComponent, CompareResultComponent, CareerResultComponent, FbsearchResultComponent, FssearchResultComponent, WikiResultComponent, YoutubeResultComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
