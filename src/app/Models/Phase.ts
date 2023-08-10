export interface Phase {
    Id: number
    Name: string
    Description: string
    ProjectId: number
    Project: number
    StartDate: Date
    EndDate: Date
}

export interface PhaseDto {
    Name: string
    Description: string
    ProjectId: number
    StartDate: Date
    EndDate: Date
}