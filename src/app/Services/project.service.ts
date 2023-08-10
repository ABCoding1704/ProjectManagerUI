import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { Project, ProjectDto } from '../Models/Project';

var PROJECTS: Observable<Project[]>

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  projects = PROJECTS

  constructor(private http: HttpClient) { }

  public getProjects(): Observable<Project[]> {
    let headers = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    })

    this.projects = this.http.get<Project[]>('https://localhost:7085/api/Projects', { headers })    

    return this.projects
  }
}
