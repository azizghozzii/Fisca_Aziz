/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FinanciersComponent } from './Financiers.component';

describe('FinanciersComponent', () => {
  let component: FinanciersComponent;
  let fixture: ComponentFixture<FinanciersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinanciersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanciersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
