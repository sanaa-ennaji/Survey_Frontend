import { Component, EventEmitter, Output, Input } from '@angular/core';
import { SurveyEditionService } from '../../services/surveyEdition.service';
import { SurveyEdition } from '../../models/survey-edition.model';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-survey-edition',
  imports: [CommonModule, FormsModule],
  templateUrl: './survey-edition.component.html',
  styleUrl: './survey-edition.component.css'
})
export class SurveyEditionComponent {
  @Output() surveyCreated = new EventEmitter<SurveyEdition>();
  @Output() close = new EventEmitter<void>();
  surveyEdition: SurveyEdition = {
    creationDate: '',
    startDate: '',
    year: new Date().getFullYear()
  }; 

  constructor(private surveyEditionService: SurveyEditionService) {}

  createEdition() {
    this.surveyEditionService.createSurveyEdition(this.surveyEdition).subscribe(
      (createdEdition) => {
        this.surveyCreated.emit(createdEdition);
        this.close.emit();
      },
      (error) => {
        console.error('Error creating survey edition:', error);
      }
    );
  }

  closeModal() {
    this.close.emit();
  } 
}


