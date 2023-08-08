import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GanttChartComponent } from './Components/gantt-chart/gantt-chart.component';

const routes: Routes = [
  { path: '', redirectTo: '/gantt-chart', pathMatch: 'full' },
  { path: 'gantt-chart', component: GanttChartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
