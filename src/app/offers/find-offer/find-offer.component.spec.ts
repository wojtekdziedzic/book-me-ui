import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindOfferComponent } from './find-offer.component';

describe('FindOfferComponent', () => {
  let component: FindOfferComponent;
  let fixture: ComponentFixture<FindOfferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindOfferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
