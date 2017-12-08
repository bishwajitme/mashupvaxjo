import {Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, Output} from '@angular/core';

import { YoutubeResultComponent } from './youtube-result.component';

import { YoutubeService } from '../services/youtube.service';


@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html'
})
export class YoutubeComponent implements OnInit {

  @ViewChild('target', {read: ViewContainerRef}) target:any;



  cmpArrayFs:Array<any> = []
  cmpRefArrayFs:Array<any> = []
  noResult:boolean = false;

  constructor(public youtubeService: YoutubeService,
              public resolver: ComponentFactoryResolver) {

  }

  ngOnInit() {
  }

  onSearch() {
    this.youtubeService.search(5)
          .subscribe((response)=>{
                  let responseData = this.parseResponse(response['_body']);
                  let items = responseData.items;
                  this.onSearchResultsComplete(items);

          },
          error => console.error(error)
        )
    }

    parseResponse(responseData){

        return JSON.parse(responseData);
    }

    onSearchResultsComplete(response) {

        for (let i of this.cmpRefArrayFs) {
            i.destroy();
        }

      if(response == 'null'){
        this.noResult = true;
      }
      else { 
        this.noResult = false;

          for (let item of response){

                  let videoid = item.id.videoId;
                  let videotitle = item.snippet.title;
              this.createComponent(videoid, videotitle);

        }
      }  
    }

    createComponent(videoID:string,videotitle:string)
    {
        let newComp = this.resolver.resolveComponentFactory(YoutubeResultComponent);
        let cmpRef = this.target.createComponent(newComp);
        let cmp              = cmpRef.instance;
        cmp.videoID = videoID;
        cmp.videotitle        = videotitle;
        this.cmpRefArrayFs.push(cmpRef);
        this.cmpArrayFs.push(cmp);
    }


}

