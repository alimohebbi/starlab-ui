import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareDetailsComponent } from './software-details.component';

describe('SoftwareDetailsComponent', () => {
  let component: SoftwareDetailsComponent;
  let fixture: ComponentFixture<SoftwareDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoftwareDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftwareDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
