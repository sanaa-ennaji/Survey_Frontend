import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubjectService } from '../../services/subject.service';
import { SubjectResponseDTO } from '../../models/subject.model';
import { Question } from '../../models/question.model';
import { CommonModule } from '@angular/common';
import { QuestionsComponent } from '../../questions/questions.component';
import { SubjectModalComponent } from '../../subject/subject-modal/subject-modal.component';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects-list.component.html',
  standalone: true,
  imports: [CommonModule, QuestionsComponent, SubjectModalComponent], 
  providers: [SubjectService],
})
export class SubjectsListComponent implements OnInit {
  subjects: SubjectResponseDTO[] = [];
  selectedSubSubjectQuestions: Question[] = [];
  editionId!: number;
  @ViewChild('subjectModal') subjectModal!: SubjectModalComponent;
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

    this.selectedSubSubjectQuestions = [];

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
  onSubjectCreated(newSubject: SubjectResponseDTO): void {
    if (newSubject.parentSubjectId) {

      const parent = this.subjects.find((s) => s.id === newSubject.parentSubjectId);
      if (parent) {
        parent.subSubjects = parent.subSubjects || [];
        parent.subSubjects.push(newSubject);
      }
    } else {

      this.subjects.push(newSubject);
    }
  }
}
