import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SimpleScrollspyRoutingModule } from './simple-scrollspy-routing.module';
import { SimpleScrollspyComponent } from './components/simple-scrollspy.component';


@NgModule({
  declarations: [SimpleScrollspyComponent],
  imports: [
    CommonModule,
    SimpleScrollspyRoutingModule
  ]
})
export class SimpleScrollspyModule { }
