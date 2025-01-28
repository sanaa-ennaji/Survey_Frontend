import { Component, OnInit } from '@angular/core';
import { SurveyService } from '../../services/survey.service';
import { Survey } from '../../models/survey.model';
import { SurveyCreate } from '../../models/survey-create.model';
import { PaginationResponse } from '../../models/pagination-response.model';
import { SurveyCardComponent } from '../survey-card/survey-card.component';
import { SurveyModalComponent } from '../survey-modal/survey-modal.component';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@Component({
  selector: 'app-survey-list',
  standalone: true,
  imports: [CommonModule, SurveyCardComponent, FontAwesomeModule, SurveyModalComponent],
  templateUrl: './survey-list.component.html',
  styleUrls: ['./survey-list.component.css']
})
export class SurveyListComponent implements OnInit {
  surveys: Survey[] = [];
  currentPage = 0;
  pageSize = 6;
  totalPages = 0;
  currentOwnerId = 1;
  constructor(private surveyService: SurveyService) {}

  ngOnInit(): void {
    this.loadSurveys();
  }

  loadSurveys(page: number = this.currentPage): void {
    this.surveyService.getAllSurveys(page, this.pageSize).subscribe({
      next: (response: PaginationResponse) => {
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
  onSurveyCreated(surveyCreate: SurveyCreate) {
    console.log('Survey created in parent:', surveyCreate);
  
    
    const newSurvey: Survey = {
      id: 0, 
      title: surveyCreate.title,
      description: surveyCreate.description,
      owner: { id: surveyCreate.ownerId, name: 'Owner Name' }, 
      surveyEditions: [], 
    };
  
    this.surveys.push(newSurvey);
  }
  
  
   
  
}
