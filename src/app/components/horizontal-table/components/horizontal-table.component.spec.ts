import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalTableComponent } from './horizontal-table.component';

describe('HorizontalTableComponent', () => {
  let component: HorizontalTableComponent;
  let fixture: ComponentFixture<HorizontalTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorizontalTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorizontalTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
