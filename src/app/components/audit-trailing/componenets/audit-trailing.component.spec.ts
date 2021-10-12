import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditTrailingComponent } from './audit-trailing.component';

describe('AuditTrailingComponent', () => {
  let component: AuditTrailingComponent;
  let fixture: ComponentFixture<AuditTrailingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditTrailingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditTrailingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
