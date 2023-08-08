import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './Components/toolbar/toolbar.component';
import { GanttChartComponent } from './Components/gantt-chart/gantt-chart.component';
import { GanttChartTimelineComponent } from './Components/gantt-chart-timeline/gantt-chart-timeline.component';

@NgModule({
  declarations: [
    AppComponent,  
    GanttChartComponent, 
    GanttChartTimelineComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToolbarComponent,    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
