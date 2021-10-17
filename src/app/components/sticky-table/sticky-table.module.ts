import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StickyTableRoutingModule } from './sticky-table-routing.module';
import {StickyTableComponent} from "./components/sticky-table.component";
import {MaterialModule} from "../../shared/material-design.module";


@NgModule({
  declarations: [StickyTableComponent],
  imports: [
    CommonModule,
    StickyTableRoutingModule,
    MaterialModule
  ]
})
export class StickyTableModule { }
