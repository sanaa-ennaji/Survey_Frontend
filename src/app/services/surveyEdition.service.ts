import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SurveyEdition } from '../models/survey-edition.model';

@Injectable({
  providedIn: 'root',
})
export class SurveyEditionService {
  private apiUrl = 'http://localhost:8080/api/v1/surveyEdition';

  constructor(private http: HttpClient) {}


  createSurveyEdition(surveyEdition: SurveyEdition): Observable<SurveyEdition> {
    console.log('Sending SurveyEdition:', surveyEdition);
    return this.http.post<SurveyEdition>(this.apiUrl, surveyEdition);
  }
  
}
