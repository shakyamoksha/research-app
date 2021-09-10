import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './component/dashboard.component';


const routes: Routes = [
  {path: '', component: DashboardComponent, children: [
    {path: 'advancedscroll', loadChildren: () => import('../components/advanced-scrollspy/advanced-scrollspy.module').then(m => m.AdvancedScrollspyModule)},
    {path: 'simplescroll', loadChildren: () => import('../components/simple-scrollspy/simple-scrollspy.module').then(m => m.SimpleScrollspyModule)},
    {path: 'expandabletable', loadChildren: () => import('../components/expandable-table/expandable-table.module').then(m => m.ExpandableTableModule)},
    {path: 'sticky', loadChildren: () => import('../components/sticky/sticky.module').then(m => m.StickyModule)}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
