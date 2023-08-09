import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GanttChartDayComponent } from './gantt-chart-day.component';

describe('GanttChartDayComponent', () => {
  let component: GanttChartDayComponent;
  let fixture: ComponentFixture<GanttChartDayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GanttChartDayComponent]
    });
    fixture = TestBed.createComponent(GanttChartDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
