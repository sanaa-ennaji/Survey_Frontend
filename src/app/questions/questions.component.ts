import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Question } from '../models/question.model';
import { AnswerComponent } from '../answer/answer.component';
@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css'],
  imports: [CommonModule, AnswerComponent]
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
