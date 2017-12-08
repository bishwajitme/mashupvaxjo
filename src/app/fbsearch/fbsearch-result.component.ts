import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fbsearch-result',
  templateUrl: './fbsearch-result.component.html'
})
export class FbsearchResultComponent implements OnInit {

  @Input() name:string;
  @Input() checkin:string;
  @Input() id:string;
  @Input() url:string;
  @Input() description:string;
  @Input() location:string;
  @Input() lat:string;
  @Input() lon:string;

  constructor() { }

  ngOnInit() {
  }

}
