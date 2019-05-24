import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonsterPage } from './monster.page';

describe('MonsterPage', () => {
  let component: MonsterPage;
  let fixture: ComponentFixture<MonsterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonsterPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonsterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
