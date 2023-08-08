import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GanttChartTimelineComponent } from './gantt-chart-timeline.component';

describe('GanttChartTimelineComponent', () => {
  let component: GanttChartTimelineComponent;
  let fixture: ComponentFixture<GanttChartTimelineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GanttChartTimelineComponent]
    });
    fixture = TestBed.createComponent(GanttChartTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
