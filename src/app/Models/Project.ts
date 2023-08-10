import { Phase } from './Phase';

export interface Project {
    Id: number
    Name: string
    Description: string
    Phases: Phase[]
    StartDate: Date
    EndDate: Date
}

export interface ProjectDto {
    Name: string
    Description: string
    StartDate: Date
    EndDate: Date
}