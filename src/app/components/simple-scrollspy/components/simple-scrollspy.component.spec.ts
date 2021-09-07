import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleScrollspyComponent } from './simple-scrollspy.component';

describe('SimpleScrollspyComponent', () => {
  let component: SimpleScrollspyComponent;
  let fixture: ComponentFixture<SimpleScrollspyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleScrollspyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleScrollspyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
