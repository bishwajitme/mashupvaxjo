import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-wiki-result',
  templateUrl: './wiki-result.component.html'
})
export class WikiResultComponent implements OnInit {

  @Input() id:string;
  @Input() title:string;
  @Input() description:string;

  constructor() { }

  ngOnInit() {
  }

}
