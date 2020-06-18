import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertsLibComponent } from './alerts-lib.component';

describe('AlertsLibComponent', () => {
  let component: AlertsLibComponent;
  let fixture: ComponentFixture<AlertsLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertsLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertsLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
