import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { answer } from '../models/answer.models';

@Injectable({
  providedIn: 'root',
})
export class AnswerService {
  private apiUrl = 'http://localhost:8080/api/v1/answer';

  constructor(private http: HttpClient) {}

  createAnswer(answers: answer): Observable<answer> {
    return this.http.post<answer>(this.apiUrl, answers);
  }
}