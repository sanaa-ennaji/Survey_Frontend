import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Question } from '../models/question.model';
import { AnswerComponent } from '../answers/answer/answer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { QuestionService } from '../services/question.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css'],
  standalone: true,
  imports: [CommonModule, AnswerComponent, FontAwesomeModule, FormsModule],
})
export class QuestionsComponent {
  @Input() questions: Question[] = [];
  @Input() subSubjectId!: number;
  selectedAnswers: any[] | null = null;
  selectedQuestionId!: number;
  newQuestion: Partial<Question> = {
    text: '',
    questionType: 'MULTIPLE_CHOICE',
    subjectId: this.subSubjectId, 
  };

  constructor(private questionService: QuestionService) {}

  showAnswers(answers: any[], questionId: number | undefined) {
    if (questionId === undefined) {
      console.error('Question ID is undefined.');
      return;
    }
    this.selectedAnswers = answers;
    this.selectedQuestionId = questionId; 
  }
  

  hideAnswers() {
    this.selectedAnswers = null;
  }

  createQuestion() {
    if (!this.newQuestion.text || !this.newQuestion.questionType) {
      alert('Please fill out all fields.');
      return;
    }

    this.newQuestion.subjectId = this.subSubjectId; 

    console.log('Payload being sent:', this.newQuestion); 
    this.questionService.createQuestion(this.newQuestion as Question).subscribe({
      next: (createdQuestion) => {
        this.questions.push(createdQuestion);
        this.resetForm();
      },
      error: (err) => {
        console.error('Error creating question:', err);
        console.error('Error details:', err.error);
      },
    });
  }

  private resetForm() {
    this.newQuestion = {
      text: '',
      questionType: 'MULTIPLE_CHOICE' ,
      subjectId: this.subSubjectId, 
    };
  }
}