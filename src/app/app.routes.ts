import { Routes } from '@angular/router';
import { SurveyListComponent } from './surveys/survey-list/survey-list.component';
import { SubjectsListComponent } from './subjects/subjects-list/subjects-list.component';

export const routes: Routes = [
    { path: '', component: SurveyListComponent },
    {path: 'subjects/:id', component: SubjectsListComponent},
];

