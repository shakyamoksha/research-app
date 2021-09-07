import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedScrollspyComponent } from './advanced-scrollspy.component';

describe('AdvancedScrollspyComponent', () => {
  let component: AdvancedScrollspyComponent;
  let fixture: ComponentFixture<AdvancedScrollspyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvancedScrollspyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedScrollspyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
