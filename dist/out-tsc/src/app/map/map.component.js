var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { FlickrService } from '../services/flickr.service';
import { WikiService } from '../services/wiki.service';
import { YoutubeService } from '../services/youtube.service';
import { FbService } from '../services/facebook.service';
import { FoursquareService } from '../services/foursquare.service';
var MapComponent = (function () {
    function MapComponent(flickrService, wikiService, youtubeService, foursquareService, fbService) {
        var _this = this;
        this.flickrService = flickrService;
        this.wikiService = wikiService;
        this.youtubeService = youtubeService;
        this.foursquareService = foursquareService;
        this.fbService = fbService;
        this.DEFAULT_MAP_ZOOM = 14;
        this.DEFAULT_MAP_LAT = 56.8770413;
        this.DEFAULT_MAP_LNG = 14.8092744;
        this.customer = {};
        this.markers = [];
        /* This function is taking call when user is searching in facebook widget via shared facebook service */
        this.fbService.componentMethodCalled$.subscribe(function () {
            var response = _this.fbService.sharedFacebookData;
            _this.markers.length = 0;
            _this.DEFAULT_MAP_ZOOM = 13;
            for (var _i = 0, response_1 = response; _i < response_1.length; _i++) {
                var result = response_1[_i];
                var title = result.name;
                var url = result.picture.data.url;
                var lati = result.location.latitude;
                var langi = result.location.longitude;
                var location_1 = '';
                if (result.location.street !== undefined) {
                    location_1 += result.location.street + ' ';
                }
                if (result.location.zip !== undefined) {
                    location_1 += result.location.zip + ' ';
                }
                if (result.location.city !== undefined) {
                    location_1 += result.location.city;
                }
                var titlecon = "<img src='" + url + "'>";
                var gicon = "http://maps.google.com/mapfiles/ms/icons/blue.png";
                var marker = { lat: lati, lang: langi, title: title, content: titlecon, icon: gicon, SERVICE: 'FACEBOOK' };
                _this.markers.push(marker);
            }
        });
        /* This function is taking call when user is searching in facebook widget via shared foursquare service */
        this.foursquareService.componentMethodCalledSq$.subscribe(function () {
            /* shared variable, assigning data from service page to inside function */
            var items_fs = _this.foursquareService.sharedFoursquareData;
            _this.markers.length = 0;
            _this.DEFAULT_MAP_ZOOM = 13;
            for (var _i = 0, items_fs_1 = items_fs; _i < items_fs_1.length; _i++) {
                var fsqitem = items_fs_1[_i];
                var lati = Number(fsqitem.location.lat);
                var langi = Number(fsqitem.location.lng);
                var fsqid = fsqitem.id; // Assign ID for venue
                var fsqname = fsqitem.name;
                var titlecon = "<a href='https://foursquare.com/v/" + fsqid + "' target='_blank'>" + fsqname + "</a> <br />";
                var gicon = "http://maps.google.com/mapfiles/ms/icons/yellow.png";
                var marker = { lat: lati, lang: langi, title: fsqname.title, content: titlecon, icon: gicon, SERVICE: 'FOUSRQUIRE' };
                _this.markers.push(marker);
            }
        });
    }
    MapComponent.prototype.ngOnInit = function () {
        this.initFlickr();
        this.initWiki();
        this.initYoutube();
        this.initFoursquare();
    };
    MapComponent.prototype.initFlickr = function () {
        var _this = this;
        var args = { text: 'växjö', per_page: 100, has_geo: true };
        this.flickrService.search(args)
            .subscribe(function (response) {
            var responseData = _this.parseFlickrResponse(response['_body']);
            var items = responseData.photos.photo;
            for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
                var item = items_1[_i];
                _this.getLocationFromPhotos(item, item.id);
            }
        }, function (error) { return console.error(error); });
    };
    MapComponent.prototype.getLocationFromPhotos = function (item, id) {
        var _this = this;
        this.flickrService.getLocation(id)
            .subscribe(function (response) {
            var responseData = _this.parseFlickrResponse(response['_body']);
            var photos = responseData.photo;
            _this.appendToMap(item, responseData);
        }, function (error) { return console.error(error); });
    };
    MapComponent.prototype.parseFlickrResponse = function (responseData) {
        responseData = responseData.replace('jsonFlickrApi(', '');
        responseData = responseData.replace('})', '}');
        responseData = responseData.replace(/\\'/g, "'");
        return JSON.parse(responseData);
    };
    MapComponent.prototype.appendToMap = function (item, geoInfo) {
        var lati = Number(geoInfo.photo.location.latitude);
        var langi = Number(geoInfo.photo.location.longitude);
        var imgSrc = "<img src='http://farm" + item.farm + ".static.flickr.com/" + item.server + "/" + item.id + "_" + item.secret + "_q.jpg'>";
        var marker = { lat: lati, lang: langi, title: item.title, content: imgSrc, SERVICE: 'FLICKR' };
        this.markers.push(marker);
    };
    /* Wikipedia implementation  */
    MapComponent.prototype.initWiki = function () {
        var _this = this;
        var args = { gscoord: this.DEFAULT_MAP_LAT | this.DEFAULT_MAP_LNG };
        this.wikiService.search(args)
            .subscribe(function (response) {
            var responseData = _this.parseWikiResponse(response['_body']);
            var items = responseData.query.geosearch;
            for (var _i = 0, items_2 = items; _i < items_2.length; _i++) {
                var article = items_2[_i];
                var lati = Number(article.lat); // assigning location info
                var langi = Number(article.lon);
                var wikiPageId = article.pageid;
                var wikititle = article.title;
                var titlecon = "<a href='http://en.wikipedia.org/?curid=" + wikiPageId + "' target='_blank'>" + wikititle + "</a>";
                var gicon = "http://maps.google.com/mapfiles/ms/icons/blue.png";
                var marker = { lat: lati, lang: langi, title: article.title, content: titlecon, icon: gicon, SERVICE: 'WIKIPEDIA' };
                _this.markers.push(marker);
            }
        }, function (error) { return console.error(error); });
    };
    MapComponent.prototype.parseWikiResponse = function (responseData) {
        return JSON.parse(responseData);
    };
    /* FOUSRQUIRE implementation  */
    MapComponent.prototype.initFoursquare = function () {
        var _this = this;
        var args = { ll: this.DEFAULT_MAP_LAT + this.DEFAULT_MAP_LNG };
        this.foursquareService.search(args)
            .subscribe(function (response) {
            var responseData = _this.parseWikiResponse(response['_body']);
            var items = responseData.response.venues;
            for (var _i = 0, items_3 = items; _i < items_3.length; _i++) {
                var fsqitem = items_3[_i];
                var lati = Number(fsqitem.location.lat);
                var langi = Number(fsqitem.location.lng);
                var fsqid = fsqitem.id; // Assign ID for venue
                var fsqname = fsqitem.name;
                // let fsqlocation= fsqitem.location.address;
                var titlecon = "<a href='https://foursquare.com/v/" + fsqid + "' target='_blank'>" + fsqname + "</a>";
                var gicon = "http://maps.google.com/mapfiles/ms/icons/yellow.png";
                var marker = { lat: lati, lang: langi, title: fsqname.title, content: titlecon, icon: gicon, SERVICE: 'FOUSRQUIRE' };
                _this.markers.push(marker);
            }
        }, function (error) { return console.error(error); });
    };
    /* YOUTUBE implementation  */
    MapComponent.prototype.initYoutube = function () {
        var _this = this;
        var args = { location: this.DEFAULT_MAP_LAT + this.DEFAULT_MAP_LNG };
        this.youtubeService.search(args)
            .subscribe(function (response) {
            var responseData = _this.parseWikiResponse(response['_body']);
            var items = responseData.items;
            for (var _i = 0, items_4 = items; _i < items_4.length; _i++) {
                var item = items_4[_i];
                var videoid = item.id.videoId;
                var videotitle = item.snippet.title;
                var videothumb = item.snippet.thumbnails.medium.url;
                _this.getLocationFromVideo(videoid, videotitle, videothumb);
            }
        }, function (error) { return console.error(error); });
    };
    MapComponent.prototype.getLocationFromVideo = function (videoid, videotitle, videothumb) {
        var _this = this;
        /* second API call for getting geolocation information of video  */
        this.youtubeService.getLocation(videoid)
            .subscribe(function (response) {
            var responseData = _this.parseWikiResponse(response['_body']);
            var items = responseData.items;
            for (var _i = 0, items_5 = items; _i < items_5.length; _i++) {
                var epvideodetails = items_5[_i];
                var lati = Number(epvideodetails.recordingDetails.location.latitude);
                var langi = Number(epvideodetails.recordingDetails.location.longitude);
                var titlecon = "<a href='https://www.youtube.com/watch?v=" + videoid + "' target='_blank'>" + videotitle + "</a><br><br><a href='https://www.youtube.com/watch?v=" + videoid + "' target='_blank'><img width='80px' height='auto' src='" + videothumb + "'</a>";
                var gicon = "http://maps.google.com/mapfiles/ms/icons/green.png";
                var marker = { lat: lati, lang: langi, title: videotitle, content: titlecon, icon: gicon, SERVICE: 'YOUTUBE' };
                _this.markers.push(marker);
            }
        }, function (error) { return console.error(error); });
    };
    /* for category filtering. still not finished  */
    MapComponent.prototype.applyFilter = function (checkbox, boxid) {
        var tick = checkbox;
        // console.log(checkbox);
        console.log(this.markers);
        for (var _i = 0, _a = this.markers; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.SERVICE == boxid) {
                item.setVisible(tick);
            }
        }
    };
    return MapComponent;
}());
MapComponent = __decorate([
    Component({
        selector: 'app-map',
        templateUrl: './map.component.html',
        styleUrls: ['./map.component.css'],
        providers: [WikiService, YoutubeService]
    }),
    __metadata("design:paramtypes", [FlickrService, WikiService, YoutubeService, FoursquareService, FbService])
], MapComponent);
export { MapComponent };
//# sourceMappingURL=/Users/bishwajithalder/mashup-master/src/src/app/map/map.component.js.map