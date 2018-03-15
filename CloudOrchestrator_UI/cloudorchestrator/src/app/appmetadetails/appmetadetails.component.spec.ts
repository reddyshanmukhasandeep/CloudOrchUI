import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppmetadetailsComponent } from './appmetadetails.component';

describe('AppmetadetailsComponent', () => {
  let component: AppmetadetailsComponent;
  let fixture: ComponentFixture<AppmetadetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppmetadetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppmetadetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
