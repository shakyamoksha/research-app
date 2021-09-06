import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvancedScrollspyRoutingModule } from './advanced-scrollspy-routing.module';
import { AdvancedScrollspyComponent } from './components/advanced-scrollspy.component';


@NgModule({
  declarations: [AdvancedScrollspyComponent],
  imports: [
    CommonModule,
    AdvancedScrollspyRoutingModule
  ]
})
export class AdvancedScrollspyModule { }
