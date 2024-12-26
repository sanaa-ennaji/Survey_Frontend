import { Injectable } from "@angular/core";
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable } from 'rxjs';


interface Owner{
    id: number;
    name: string;
}

interface SurveyEdition {
    id: number;
    creationDate: string;
    startDate: string;
    year: number;
}

interface Survey {
    id: number;
    title: string;
    description: string;
    owner: Owner;
    surveyEditions: SurveyEdition[];
}

interface PagenationResponse {
    content : Survey[];
    pageNumber: number;
    pageSize: number;
    totalElements: number;
    totalPages: number;
    mast: boolean;
}

@Injectable({
providedIn: 'root'
})
export class SurveyService {
    private apiUrl = 'http://localhost:8080/api/survey';

    constructor(private http: HttpClient) {}

    getAllSurveys(page: number = 0, size: number = 3):  Observable<PagenationResponse> {
    const params = new HttpParams()
    .set('page', page)
    .set('size', size);
    return  this.http.get<PagenationResponse>(this.apiUrl, {params});

    }
}
