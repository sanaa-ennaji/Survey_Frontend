import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Question } from '../models/question.model';
import { AnswerComponent } from '../answer/answer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css'],
  imports: [CommonModule, AnswerComponent, FontAwesomeModule]
})
export class QuestionsComponent {
  @Input() questions: Question[] = [];
  selectedAnswers: any[] | null = null;

  showAnswers(answers: any[]) {
    this.selectedAnswers = answers;
  }

  hideAnswers() {
    this.selectedAnswers = null;
  }
}
