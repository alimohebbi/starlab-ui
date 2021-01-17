import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { openingComponent } from './collaborations.component';

describe('CollaborationsComponent', () => {
  let component: openingComponent;
  let fixture: ComponentFixture<openingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ openingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(openingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
