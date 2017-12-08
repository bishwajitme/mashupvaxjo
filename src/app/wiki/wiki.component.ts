import {Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver} from '@angular/core';

import { WikiResultComponent } from './wiki-result.component';

import { WikiService } from './wiki.service';

@Component({
  selector: 'app-wiki',
  templateUrl: './wiki.component.html'
})
export class WikiComponent implements OnInit {

  @ViewChild('target', {read: ViewContainerRef}) target:any;

  cmpArray:Array<any> = []
  cmpRefArray:Array<any> = []
  noResult:boolean = false;

  constructor(public wikiService:WikiService,
              public resolver:ComponentFactoryResolver) {

  }

  ngOnInit() {
  }

  onSearch(input) {
    let title = input.value || input.placeholder;

    this.wikiService.getResults(title)
          .subscribe((response)=>{
                  let responseData = this.parseResponse(response['_body']);
                  let items = responseData.query.search;
                  console.log(responseData);
             this.onSearchResultsComplete(items);
          },
          error => console.error(error)
        )
    }

    onSearchResultsComplete(response) {

      for (let i of this.cmpRefArray) {
        i.destroy();
      }

        if(response == 'null'){
            this.noResult = true;
        }
        else {
            this.noResult = false;

            for (let result of response){
                var title = result.title;
                var description = result.snippet;
                var wikiPageId = result.pageid;
                this.createComponent(wikiPageId, title, description);
            }
        }
    }
    parseResponse(responseData){

        return JSON.parse(responseData);
    }

    createComponent(wikiPageId: string, title: string, description: string)
    {
        let newComp = this.resolver.resolveComponentFactory(WikiResultComponent);
        let cmpRef = this.target.createComponent(newComp);
        let cmp              = cmpRef.instance;
            cmp.id      = wikiPageId;
            cmp.title      = title;
            cmp.description = description;

        this.cmpRefArray.push(cmpRef);
        this.cmpArray.push(cmp);
    }
}

