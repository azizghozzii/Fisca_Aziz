/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FiscauxComponent } from './Fiscaux.component';

describe('FiscauxComponent', () => {
  let component: FiscauxComponent;
  let fixture: ComponentFixture<FiscauxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiscauxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiscauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
