import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Question } from '../models/question.model';


@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css'],
  imports: [CommonModule],
})
export class QuestionsComponent {
  @Input() questions: Question[] = [];
}
