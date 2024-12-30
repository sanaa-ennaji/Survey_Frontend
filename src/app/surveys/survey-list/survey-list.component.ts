import { Component, OnInit } from '@angular/core';
import { SurveyService } from '../../services/survey.service';
import { SurveyCardComponent } from '../survey-card/survey-card.component';
import { CommonModule } from '@angular/common';


interface Owner {
  id: number;
  name: string;
}

interface SurveyEdition {
  id: number;
  creationDate: string;
  startDate: string;
  year: number;
}
interface Survey {
  id: number;
  title: string;
  description: string;
  owner: Owner;
  surveyEditions: SurveyEdition[];
}

@Component({
  selector: 'app-survey-list',
  standalone: true,
  imports: [ CommonModule, SurveyCardComponent],
  templateUrl: './survey-list.component.html',
  styleUrls: ['./survey-list.component.css']

})
export class SurveyListComponent implements OnInit {
  surveys: Survey[] = [];
  currentPage = 0;
  pageSize = 3;
  totalPages = 0;

  constructor(private surveyService: SurveyService) {}

  ngOnInit(): void {
    this.loadSurveys();
  }

  loadSurveys(page: number = this.currentPage): void {
    this.surveyService.getAllSurveys(page, this.pageSize).subscribe({
      next: (response) => {
        this.surveys = response.content;
        this.currentPage = response.pageNumber;
        this.totalPages = response.totalPages;
      },
      error: (error) => console.error('Error loading surveys:', error)
    });
  }

  goToPage(page: number): void {
    if (page >= 0 && page < this.totalPages) {
      this.loadSurveys(page);
    }
  }
}