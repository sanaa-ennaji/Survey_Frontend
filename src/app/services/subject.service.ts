import {Injectable} from '@angular/core';
import {HttpClient } from '@angular/common/http';
import {observable} from 'rxjs';


export interface Subject {
    id : number ;
    title : number ;
    parentSubjectId: number; 
    subSubjects : {id : number; title: string}[
        
    ]
}
