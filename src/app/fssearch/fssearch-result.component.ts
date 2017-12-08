import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fssearch-result',
  templateUrl: './fssearch-result.component.html'
})
export class FssearchResultComponent implements OnInit {

    @Input() fsname:string;
    @Input() fscheckin:string;
    @Input() fsid:string;
    @Input() fsdescription:string;
    @Input() fslocation:string;
    @Input() fslat:string;
    @Input() fslon:string;

  constructor() { }

  ngOnInit() {
  }

}
