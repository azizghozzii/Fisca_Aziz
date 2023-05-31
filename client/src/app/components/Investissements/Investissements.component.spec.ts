/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InvestissementsComponent } from './Investissements.component';

describe('InvestissementsComponent', () => {
  let component: InvestissementsComponent;
  let fixture: ComponentFixture<InvestissementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestissementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestissementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
