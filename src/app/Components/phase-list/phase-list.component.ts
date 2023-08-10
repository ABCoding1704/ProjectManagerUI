import { Component } from '@angular/core';
import { PhaseService } from '../../Services/phase.service';
import { Phase } from 'src/app/Models/Phase';

@Component({
  selector: 'phase-list',
  templateUrl: './phase-list.component.html',
  styleUrls: ['./phase-list.component.css']
})
export class PhaseListComponent {
  // phases: Phase[] = []
  // phases: any

  // constructor(private phaseService: PhaseService) { }

  // ngOnInit() {
  //   this.phaseService.getPhases().subscribe(res => {
  //     this.phases = res
  //   })
  // }
}
