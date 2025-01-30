import { Component, EventEmitter, Output, Input } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
import { SurveyEdition } from '../../models/survey-edition.model';
@Component({
  selector: 'app-survey-edition',
  imports: [],
  templateUrl: './survey-edition.component.html',
  styleUrl: './survey-edition.component.css'
})
export class SurveyEditionComponent {

  surveyEdition: SurveyEdition = {
    creationDate: '',
    startDate: '',
    year: new Date().getFullYear()
  }; 

  @Output() surveyCreated = new EventEmitter<SurveyEdition>();
  @Output() close = new EventEmitter<void>();

  createSurveyEdition() {
    this.surveyCreated.emit(this.surveyEdition);
    this.close.emit();
  }

  closeModal() {
    this.close.emit();
  } 
}


