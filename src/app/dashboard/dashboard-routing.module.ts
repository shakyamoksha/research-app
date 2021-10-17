import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './component/dashboard.component';


const routes: Routes = [
  {path: '', component: DashboardComponent, children:
      [
        {path: 'advancedscroll',
          loadChildren: () => import('../components/advanced-scrollspy/advanced-scrollspy.module').then(m => m.AdvancedScrollspyModule)},
        {path: 'simplescroll',
          loadChildren: () => import('../components/simple-scrollspy/simple-scrollspy.module').then(m => m.SimpleScrollspyModule)},
        {path: 'audittrail',
          loadChildren: () => import('../components/audit-trailing/audit-trailing.module').then(m => m.AuditTrailingModule)},
        {path: 'stickytable',
          loadChildren: () => import('../components/sticky-table/sticky-table.module').then(m => m.StickyTableModule)}
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
