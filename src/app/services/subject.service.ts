import {Injectable} from '@angular/core';
import {HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';


export interface Subject {
    id : number ;
    title : number ;
    parentSubjectId: number; 
    subSubjects : {id : number; title: string}[];
    surveyEdition: {id: number; creationDate:string;  startDate: string; year: number}   | null;
    question: any[];

}

@Injectable({
    providedIn : 'root',
})
export class SubjectService{
    private apiUrl = 'http://localhost:8080/api/v1/subject/edition/{id}'
    constructor(private http: HttpClient){}

    getAllSubjects():  Observable<Subject[]>{
        return this.http.get<Subject[]>(this.apiUrl);
    }
}
 