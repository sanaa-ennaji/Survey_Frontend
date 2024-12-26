import { Component, Input } from '@angular/core';

interface Owner {
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

@Component({
  selector: 'app-survey-card',
  templateUrl: './survey-card.component.html',
  styleUrls: ['./survey-card.component.css']
})
export class SurveyCardComponent {
  @Input() survey!: Survey;
}
