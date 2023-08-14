import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './Components/toolbar/toolbar.component';
import { GanttChartComponent } from './Components/gantt-chart/gantt-chart.component';

@NgModule({
  declarations: [
    AppComponent,  
    GanttChartComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToolbarComponent,    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
