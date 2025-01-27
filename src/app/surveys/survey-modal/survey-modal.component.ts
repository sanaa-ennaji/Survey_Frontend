import { Component, EventEmitter, Output } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-survey-modal',
  templateUrl: './survey-modal.component.html',
  styleUrls: ['./survey-modal.component.css'],
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
        description: this.surveyDescription,
      });
      this.closeModal();
    }
  }
}
