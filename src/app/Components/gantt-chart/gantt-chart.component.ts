import { Component } from '@angular/core';

var startDate: Date = new Date(2023, 7, 2)
var mondayStartDate: Date = new Date()
var endDate: Date = new Date(2023, 7, 29)
var mondayEndDate: Date = new Date()
var weekCount: number
const DAYS: Date[] = []
const DATES: string[] = []

@Component({
  selector: 'gantt-chart',
  templateUrl: './gantt-chart.component.html',
  styleUrls: ['./gantt-chart.component.css']
})
export class GanttChartComponent {

  days = DAYS
  day: Date = new Date()
  dates = DATES
  monday: Date = new Date()
  sunday: Date = new Date()
  mondayStr = ""
  sundayStr = ""
  
  ngOnInit(): void {
    this.setValuesTimeline()
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
      DAYS.push(new Date(this.day))
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

  beginWithZero(dayOrMonth: number): string {
    if(dayOrMonth < 10) {
      return "0" + dayOrMonth
    }
    else {
      return dayOrMonth.toString()
    }
    
  }
}
