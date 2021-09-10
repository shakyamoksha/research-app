import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ExpandableTableComponent} from './components/expandable-table.component';


const routes: Routes = [{path: '', component: ExpandableTableComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpandableTableRoutingModule { }
