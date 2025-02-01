import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { AnswerService } from '../../services/answer.service'; 
import { answer } from '../../models/answer.models';

@Component({
  selector: 'app-answer',
  standalone: true,
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css'],
  imports: [CommonModule, FormsModule], 
})
export class AnswerComponent {
  @Input() answers: answer[] = [];
  @Input() questionId!: number; 
  newAnswer: Partial<answer> = {
    text: '',
    questionId: this.questionId, 
  };

  constructor(private answerService: AnswerService) {}

  createAnswer() {
    if (!this.newAnswer.text) {
      alert('Please fill out the answer text.');
      return;
    }

    this.newAnswer.questionId = this.questionId;

    this.answerService.createAnswer(this.newAnswer as answer).subscribe({
      next: (createdAnswer) => {
        this.answers.push(createdAnswer); 
        this.resetForm(); 
      },
      error: (err) => {
        console.error('Error creating answer:', err);
        alert('Failed to create answer. Please try again.');
      },
    });
  }

  private resetForm() {
    this.newAnswer = {
      text: '',
      questionId: this.questionId,
    };
  }
}