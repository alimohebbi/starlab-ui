import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpeningsComponent } from './openings.component';

describe('CollaborationsComponent', () => {
  let component: OpeningsComponent;
  let fixture: ComponentFixture<OpeningsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpeningsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpeningsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
