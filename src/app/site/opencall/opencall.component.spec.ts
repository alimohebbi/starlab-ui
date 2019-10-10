import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpencallComponent } from './opencall.component';

describe('OpencallComponent', () => {
  let component: OpencallComponent;
  let fixture: ComponentFixture<OpencallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpencallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpencallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
