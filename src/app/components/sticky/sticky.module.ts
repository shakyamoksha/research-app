import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StickyRoutingModule } from './sticky-routing.module';
import {StickyComponent} from './components/sticky.component';


@NgModule({
  declarations: [StickyComponent],
  imports: [
    CommonModule,
    StickyRoutingModule
  ]
})
export class StickyModule { }
