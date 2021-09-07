import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdvancedScrollspyComponent } from './components/advanced-scrollspy.component';


const routes: Routes = [{path: '', component: AdvancedScrollspyComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdvancedScrollspyRoutingModule { }
