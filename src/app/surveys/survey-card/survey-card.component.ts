import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Survey} from '../../models/survey.model';
import { SurveyEdition } from '../../models/survey-edition.model';
import { SurveyEditionComponent} from '../survey-edition/survey-edition.component'
@Component({
  selector: 'app-survey-card',
  standalone: true,
  imports: [CommonModule, RouterModule, SurveyEditionComponent],
  templateUrl: './survey-card.component.html',
  styleUrls: ['./survey-card.component.css'],
 
})
export class SurveyCardComponent {
  @Input() survey!: Survey;

  isModalOpen = false;

  openModal() {
    this.isModalOpen = true;
  }

  handleSurveyCreated(newEdition: SurveyEdition) {
    this.survey.surveyEditions.push(newEdition);
    this.isModalOpen = false;
  }
}
