import { Component } from '@angular/core';
import { PhaseService } from 'src/app/Services/phase.service';

interface Day {
  Date: Date;
  Weekday: string
}

var startDate: Date = new Date(2023, 7, 2)
var mondayStartDate: Date = new Date()
var endDate: Date = new Date(2023, 7, 29)
var mondayEndDate: Date = new Date()
var weekCount: number
var DAYS: Day[] = []
var DATES: string[] = []

@Component({
  selector: 'gantt-chart',
  templateUrl: './gantt-chart.component.html',
  styleUrls: ['./gantt-chart.component.css']
})
export class GanttChartComponent {

  //Phases
  phases: any

  //Timeline
  days = DAYS
  day: Date = new Date()
  dates = DATES
  monday: Date = new Date()
  sunday: Date = new Date()
  mondayStr = ""
  sundayStr = ""
  // weekday: string = ""

  constructor(private phaseService: PhaseService) { }
  
  ngOnInit(): void {
    this.getPhases()
    this.setValuesTimeline()    
  }

  scroll() {
    var box = document.getElementById('box')
    box?.scroll(100, 1000)
  }

  getPhases() {
    this.phaseService.getPhases().subscribe(res => {
      this.phases = res
    })
  }

  setValuesTimeline(): void {
    //Get the date of the first day in the first week
    mondayStartDate.setDate(startDate.getDate() - (startDate.getDay() - 1))
    mondayEndDate.setDate(endDate.getDate() - (endDate.getDay() - 1))
    
    weekCount = (((mondayEndDate.getTime() - mondayStartDate.getTime())) / (1000 * 3600 * 24) + 7) / 7

    //Set dates of each day
    this.day.setDate(mondayStartDate.getDate())
    this.day.setMonth(mondayStartDate.getMonth())
    this.day.setFullYear(mondayStartDate.getFullYear())
    for (let index = 0; index < weekCount * 7; index++) {
      let day: Day = {
        Date: new Date(this.day),
        Weekday: this.getWeekday(this.day)
      }

      DAYS.push(day)
      this.day.setDate(this.day.getDate() + 1)
    }


    this.monday = mondayStartDate
    for (let index = 0; index < weekCount; index++) {
      //Set date of Monday in current week
      this.mondayStr = this.beginWithZero(this.monday.getDate()) + "." + this.beginWithZero(this.monday.getMonth() + 1) + "." + this.monday.getFullYear()
      
      //Set date of Sunday in current week
      this.sunday = this.monday
      this.sunday.setDate(this.sunday.getDate() + 6)
      this.sundayStr = this.beginWithZero(this.sunday.getDate()) + "." + this.beginWithZero(this.sunday.getMonth() + 1) + "." + this.sunday.getFullYear()
      
      //Put timespan of week in array
      DATES.push(this.mondayStr + " - " + this.sundayStr)

      //Go to next week
      this.monday.setDate(this.monday.getDate() + 1)
    }
  }

  getWeekday(dayDate: Date) : string {
    switch(dayDate.getDay()) {
      case 1:
        return "Mon"        
      case 2:
        return "Tue"        
      case 3:
        return "Wed"        
      case 4:
        return "Thu"        
      case 5:
        return "Fri"        
      case 6:
        return "Sat"        
      case 0:
        return "Sun"        
      default:
        return ""        
    }
  }

  beginWithZero(dayOrMonth: number): string {
    if(dayOrMonth < 10) {
      return "0" + dayOrMonth
    }
    else {
      return dayOrMonth.toString()
    }
    
  }
  
}
