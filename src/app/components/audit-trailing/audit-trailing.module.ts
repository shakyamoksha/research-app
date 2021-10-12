import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuditTrailingRoutingModule } from './audit-trailing-routing.module';
import { AuditTrailingComponent } from './componenets/audit-trailing.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../../shared/material-design.module';

import {LocalizedNumericInputDirective} from '../../directives/LocalizedNumericInput.directive';


@NgModule({
  declarations: [AuditTrailingComponent],
  imports: [
    CommonModule,
    AuditTrailingRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class AuditTrailingModule { }
