import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvancedScrollspyRoutingModule } from './advanced-scrollspy-routing.module';
import { AdvancedScrollspyComponent } from './components/advanced-scrollspy.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/material-design.module';


@NgModule({
  declarations: [AdvancedScrollspyComponent],
  imports: [
    CommonModule,
    AdvancedScrollspyRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule
  ]
})
export class AdvancedScrollspyModule { }
