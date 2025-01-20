import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubjectService } from '../../services/subject.service';
import { SubjectResponseDTO } from '../../models/subject.model';
import { Question } from '../../models/question.model';
import { CommonModule } from '@angular/common';
import { QuestionsComponent } from '../../questions/questions.component';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects-list.component.html',
  standalone: true,
  imports: [CommonModule, QuestionsComponent], 
  providers: [SubjectService],
})
export class SubjectsListComponent implements OnInit {
  subjects: SubjectResponseDTO[] = [];
  selectedSubSubjectQuestions: Question[] = [];
  editionId!: number;

  constructor(
    private route: ActivatedRoute,
    private subjectService: SubjectService
  ) {}

  ngOnInit(): void {
    this.editionId = Number(this.route.snapshot.paramMap.get('id'));
    this.loadSubjects();
  }

  loadSubjects(): void {
    this.subjectService.getSubjectsByEditionId(this.editionId).subscribe({
      next: (data) => (this.subjects = data),
      error: (err) => console.error('Error loading subjects', err),
    });
  }

  onSubSubjectClick(subSubjectId: number): void {
    // Clear the previous selected questions
    this.selectedSubSubjectQuestions = [];

    // Find the subSubject with the clicked id and fetch its questions
    for (const subject of this.subjects) {
      const subSubject = subject.subSubjects.find(
        (sub) => sub.id === subSubjectId
      );
      if (subSubject) {
        this.selectedSubSubjectQuestions = subSubject.questions || [];
        break;
      }
    }
  }
}
