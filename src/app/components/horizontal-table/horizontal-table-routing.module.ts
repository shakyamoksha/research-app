import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HorizontalTableComponent} from './components/horizontal-table.component';


const routes: Routes = [{path: '', component: HorizontalTableComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HorizontalTableRoutingModule { }
