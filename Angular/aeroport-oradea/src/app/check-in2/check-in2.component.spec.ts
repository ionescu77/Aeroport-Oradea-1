import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckIn2Component } from './check-in2.component';

describe('CheckIn2Component', () => {
  let component: CheckIn2Component;
  let fixture: ComponentFixture<CheckIn2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckIn2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckIn2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
