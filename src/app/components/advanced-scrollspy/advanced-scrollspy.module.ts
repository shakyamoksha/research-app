import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvancedScrollspyRoutingModule } from './advanced-scrollspy-routing.module';
import { AdvancedScrollspyComponent } from './components/advanced-scrollspy.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MaterialModule} from '../../shared/material-design.module';
import {LocalizedNumericInputDirective} from '../../directives/LocalizedNumericInput.directive';



@NgModule({
    declarations: [AdvancedScrollspyComponent, LocalizedNumericInputDirective],
  imports: [
    CommonModule,
    AdvancedScrollspyRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule
  ]
})
export class AdvancedScrollspyModule { }
