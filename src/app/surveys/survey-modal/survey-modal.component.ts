import { Component, EventEmitter, Output, Input } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
import { SurveyService } from '../../services/survey.service';
import { SurveyCreate } from '../../models/survey-create.model';

@Component({
  selector: 'app-survey-modal',
  templateUrl: './survey-modal.component.html',
  styleUrls: ['./survey-modal.component.css'],
  imports: [CommonModule, FormsModule],
})
export class SurveyModalComponent {
  showModal = false;
  surveyTitle = '';
  surveyDescription = '';
  
  @Input() ownerId: number = 0; 

  @Output() surveyCreated = new EventEmitter<{ title: string; description: string }>();

  constructor(private surveyService: SurveyService) {}

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  createSurvey() {
    if (this.surveyTitle && this.surveyDescription && this.ownerId) {
      const newSurvey: SurveyCreate = {
        title: this.surveyTitle,
        description: this.surveyDescription,
        ownerId: this.ownerId, // Dynamically set from the parent
      };

      this.surveyService.createSurvey(newSurvey).subscribe({
        next: (response) => {
          console.log('Survey created successfully:', response);
          this.surveyCreated.emit(response); 
          this.closeModal();
        },
        error: (error) => console.error('Error creating survey:', error),
      });
    }
  }
}
