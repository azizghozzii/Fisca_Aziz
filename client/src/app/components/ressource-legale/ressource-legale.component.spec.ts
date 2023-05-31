import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RessourceLegaleComponent } from './ressource-legale.component';

describe('RessourceLegaleComponent', () => {
  let component: RessourceLegaleComponent;
  let fixture: ComponentFixture<RessourceLegaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RessourceLegaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RessourceLegaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
