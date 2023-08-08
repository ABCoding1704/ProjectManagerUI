import { Component, Input } from '@angular/core';

@Component({
  selector: 'gantt-chart-timeline',
  templateUrl: './gantt-chart-timeline.component.html',
  styleUrls: ['./gantt-chart-timeline.component.css']
})
export class GanttChartTimelineComponent {
  @Input() timespan?: string
}
