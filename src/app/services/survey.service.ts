import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PaginationResponse } from '../models/pagination-response.model';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {
  private apiUrl = 'http://localhost:8080/api/v1/survey';

  constructor(private http: HttpClient) {}

  getAllSurveys(page: number = 0, size: number = 3): Observable<PaginationResponse> {
    const params = new HttpParams().set('page', page).set('size', size);
    return this.http.get<PaginationResponse>(this.apiUrl, { params });
  }
  
  createSurvey(survey: { title: string; description: string,  ownerId: number}): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, survey);
  }
}
