import { Component, Input } from '@angular/core';

var tempPhases: string [] = ["Phase 1", "Phase 2"]

@Component({
  selector: 'gantt-chart-day',
  templateUrl: './gantt-chart-day.component.html',
  styleUrls: ['./gantt-chart-day.component.css']
})
export class GanttChartDayComponent {
  @Input() dayDate?: Date

  weekday: string = ""
  tempPhases = tempPhases

  ngOnInit(): void {
    if (this.dayDate != null)
      this.getWeekday(this.dayDate)
  }

  getWeekday(dayDate: Date) : void {
    switch(dayDate.getDay()) {
      case 1:
        this.weekday = "Mon"
        break;
      case 2:
        this.weekday = "Tue"
        break;
      case 3:
        this.weekday = "Wed"
        break;
      case 4:
        this.weekday = "Thu"
        break;
      case 5:
        this.weekday = "Fri"
        break;
      case 6:
        this.weekday = "Sat"
        break;
      case 0:
        this.weekday = "Sun"
        break;
      default:
        this.weekday = ""
        break;
    }
  }


}
