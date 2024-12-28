import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
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
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './survey-card.component.html',
  styleUrls: ['./survey-card.component.css'],
 
})
export class SurveyCardComponent {
  @Input() survey!: Survey;
}
