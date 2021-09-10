import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StickyComponent} from './components/sticky.component';


const routes: Routes = [{path: '', component: StickyComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StickyRoutingModule { }
