import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SimpleScrollspyComponent } from './components/simple-scrollspy.component';


const routes: Routes = [{path: '', component: SimpleScrollspyComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SimpleScrollspyRoutingModule { }
