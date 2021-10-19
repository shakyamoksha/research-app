import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HorizontalTableRoutingModule } from './horizontal-table-routing.module';
import { HorizontalTableComponent } from './components/horizontal-table.component';
import {MaterialModule} from '../../shared/material-design.module';


@NgModule({
  declarations: [HorizontalTableComponent],
  imports: [
    CommonModule,
    HorizontalTableRoutingModule,
    MaterialModule
  ]
})
export class HorizontalTableModule { }
