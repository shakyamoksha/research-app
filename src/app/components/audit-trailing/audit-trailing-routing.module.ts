import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuditTrailingComponent} from './componenets/audit-trailing.component';


const routes: Routes = [{path: '', component: AuditTrailingComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuditTrailingRoutingModule { }
