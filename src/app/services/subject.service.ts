import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import  {SubjectResponseDTO } from '../models/subject.model'


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
