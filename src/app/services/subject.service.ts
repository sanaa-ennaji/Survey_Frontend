import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface SubjectResponseDTO {
  id: number;
  title: string;
  parentSubjectId: number;
  subSubjects: { id: number; title: string }[];
  surveyEditionId: number;
  questions: any[];
}

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  private baseUrl = 'http://localhost:8080/api/v1/subject/edition';

  constructor(private http: HttpClient) {}

  getSubjectsByEditionId(id: number): Observable<SubjectResponseDTO[]> {
    return this.http.get<SubjectResponseDTO[]>(`${this.baseUrl}/${id}`);
  }
}
