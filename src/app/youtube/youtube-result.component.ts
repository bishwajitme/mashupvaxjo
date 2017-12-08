import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';




@Component({
  selector: 'app-youtube-result',
    templateUrl: './youtube-result.component.html'
})
export class YoutubeResultComponent implements OnInit {

    @Input() videotitle:string;
    @Input() videoID: number;

    baseUrl: string = 'https://www.youtube.com/embed/';
    public url;
    constructor(private sanitizer: DomSanitizer ) {
    }


  ngOnInit() {
      this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.baseUrl + this.videoID);
      console.log(this.url);
  }

}
