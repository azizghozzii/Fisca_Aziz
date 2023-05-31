/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CadreComponent } from './Cadre.component';

describe('CadreComponent', () => {
  let component: CadreComponent;
  let fixture: ComponentFixture<CadreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
