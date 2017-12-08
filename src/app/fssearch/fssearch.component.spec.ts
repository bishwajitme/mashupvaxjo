/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FssearchComponent } from './fssearch.component';

describe('fssearchComponent', () => {
  let component: FssearchComponent;
  let fixture: ComponentFixture<FssearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FssearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FssearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
