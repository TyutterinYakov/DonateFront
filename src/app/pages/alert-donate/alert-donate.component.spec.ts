import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertDonateComponent } from './alert-donate.component';

describe('AlertDonateComponent', () => {
  let component: AlertDonateComponent;
  let fixture: ComponentFixture<AlertDonateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertDonateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertDonateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
