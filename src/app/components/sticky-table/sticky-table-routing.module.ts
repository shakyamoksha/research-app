import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StickyTableComponent} from "./components/sticky-table.component";


const routes: Routes = [{path: '', component: StickyTableComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StickyTableRoutingModule { }
