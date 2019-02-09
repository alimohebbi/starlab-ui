import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareDataComponent } from './software-data.component';

describe('SoftwareDataComponent', () => {
  let component: SoftwareDataComponent;
  let fixture: ComponentFixture<SoftwareDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoftwareDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftwareDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
