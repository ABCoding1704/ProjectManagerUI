import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, lastValueFrom, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { Phase, PhaseDto } from '../Models/Phase';

var PHASES: Observable<Phase[]>

@Injectable({
  providedIn: 'root'
})
export class PhaseService {
  phases = PHASES
  
  constructor(private http: HttpClient) { }

  public getPhases(): Observable<Phase[]>  {
    let headers = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    })
    
    this.phases = this.http.get<Phase[]>('https://localhost:7085/api/Phases', { headers })
    
    return this.phases
  }
}
