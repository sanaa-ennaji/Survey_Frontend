import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { answer } from '../models/answer.models';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css'],
  imports: [CommonModule]
})
export class AnswerComponent {
  @Input() answers: answer[] = [];
}
