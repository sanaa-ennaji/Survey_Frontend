import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-survey-modal',
  templateUrl: './survey-modal.component.html',
  styleUrls: ['./survey-modal.component.css'],
  imports: [CommonModule, FormsModule]
})
export class SurveyModalComponent {
  showModal = false;
  surveyTitle = '';
  surveyDescription = '';

  @Output() surveyCreated = new EventEmitter<{ title: string; description: string }>();

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  createSurvey() {
    if (this.surveyTitle && this.surveyDescription) {
      this.surveyCreated.emit({
        title: this.surveyTitle,
        description: this.surveyDescription
      });
      this.closeModal();
    }
  }  
}
