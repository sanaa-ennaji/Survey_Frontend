import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SurveyEditionService } from '../../services/surveyEdition.service';
import { SurveyEdition } from '../../models/survey-edition.model';
@Component({
  selector: 'app-survey-edition',
  imports: [],
  standalone: true,
  templateUrl: './survey-edition.component.html',
  styleUrl: './survey-edition.component.css'
  
})
export class SurveyEditionComponent {
  @Input() surveyId!: number; 
  @Output() surveyEditionCreated = new EventEmitter<SurveyEdition>();
  
  surveyEdition: SurveyEdition = {
    creationDate: new Date().toISOString(),
    startDate: '',
    year: new Date().getFullYear(),
  };

  constructor(private surveyEditionService: SurveyEditionService) {}

  createSurveyEdition(): void {
    this.surveyEdition.surveyId = this.surveyId;
    this.surveyEditionService.createSurveyEdition(this.surveyEdition).subscribe({
      next: (createdEdition) => {
        this.surveyEditionCreated.emit(createdEdition);
        this.resetForm();
      },
      error: (error) => {
        console.error('Error creating survey edition', error);
      },
    });
  }

  resetForm(): void {
    this.surveyEdition = {
      creationDate: new Date().toISOString(),
      startDate: '',
      year: new Date().getFullYear(),
    };
  }
}
