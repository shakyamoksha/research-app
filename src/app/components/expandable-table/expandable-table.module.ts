import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpandableTableRoutingModule } from './expandable-table-routing.module';
import {ExpandableTableComponent} from './components/expandable-table.component';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [ExpandableTableComponent],
    imports: [
        CommonModule,
        ExpandableTableRoutingModule,
        MatTableModule
    ]
})
export class ExpandableTableModule { }
