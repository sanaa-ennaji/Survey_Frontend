import { Routes } from '@angular/router';
import { SurveyListComponent } from './surveys/survey-list/survey-list.component';
import { SubjectsListComponent } from './subject/subjects-list/subjects-list.component';
import{ SurveyModalComponent} from './surveys/survey-modal/survey-modal.component'
export const routes: Routes = [
    { path: '', component: SurveyListComponent },
    { path: 'edition/:id', component: SubjectsListComponent },

];

