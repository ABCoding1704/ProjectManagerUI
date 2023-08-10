import { Component } from '@angular/core';

import { ProjectService } from './Services/project.service';
import { PhaseService } from './Services/phase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],  
})
export class AppComponent {
  
  constructor(private projectService: ProjectService, private phaseService: PhaseService) { }

  ngOnInit(): void {
    this.projectService.getProjects()
    this.phaseService.getPhases()
  }
}

