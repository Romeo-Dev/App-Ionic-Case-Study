import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WpdetailsPage } from './wpdetails.page';

describe('WpdetailsPage', () => {
  let component: WpdetailsPage;
  let fixture: ComponentFixture<WpdetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WpdetailsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WpdetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
