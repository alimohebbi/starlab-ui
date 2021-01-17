import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaincolaborationComponent } from './maincolaboration.component';

describe('MaincolaborationComponent', () => {
  let component: MaincolaborationComponent;
  let fixture: ComponentFixture<MaincolaborationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaincolaborationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaincolaborationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
