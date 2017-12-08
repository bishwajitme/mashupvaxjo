/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WikiResultComponent } from './wiki-result.component';

describe('WikiResultComponent', () => {
  let component: WikiResultComponent;
  let fixture: ComponentFixture<WikiResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WikiResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WikiResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
