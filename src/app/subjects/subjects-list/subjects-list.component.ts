import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubjectService, Subject } from '../../services/subject.service';
@Component({
  selector: 'app-subjects-list',
  imports: [],
  templateUrl: './subjects-list.component.html',
  styleUrl: './subjects-list.component.css'
})
export class SubjectsListComponent implements OnInit {
  private subjectService = inject(SubjectService);
  private route = inject(ActivatedRoute);

  subjects: Subject[] = [];
  filteredSubjects: Subject[] = [];
  surveyEditionId: number | null = null;

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.surveyEditionId = Number(params['id']);
      this.fetchSubjects();
    });
  }

  fetchSubjects(): void {
    this.subjectService.getAllSubjects().subscribe((data) => {
      this.subjects = data;
      this.filterSubjectsBySurveyEdition();
    });
  }

  filterSubjectsBySurveyEdition(): void {
    if (this.surveyEditionId) {
      this.filteredSubjects = this.subjects.filter(
        (subject) => subject.surveyEdition?.id === this.surveyEditionId
      );
    }
  }
}
