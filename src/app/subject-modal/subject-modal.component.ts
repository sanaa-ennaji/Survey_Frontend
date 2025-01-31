// subject-modal.component.ts
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SubjectResponseDTO } from '../models/subject.model';
import { SubjectService } from '../services/subject.service';

@Component({
  selector: 'app-subject-modal',
  templateUrl: './subject-modal.component.html',
  styleUrls: ['./subject-modal.component.css']
})
export class SubjectModalComponent {
  @Input() editionId!: number;
  @Input() existingSubjects: SubjectResponseDTO[] = [];
  @Output() subjectCreated = new EventEmitter<SubjectResponseDTO>();
  isOpen = false;
  isSubsubject = false;
  subject: Partial<SubjectResponseDTO> = {
    title: '',
    parentSubjectId: null,
    surveyEditionId: this.editionId
  };

  constructor(private subjectService: SubjectService) {}

  get hasParentSubject(): boolean {
    return this.isSubsubject && this.existingSubjects.length > 0;
  }

  openModal() {
    this.isOpen = true;
  }

  closeModal() {
    this.isOpen = false;
    this.resetForm();
  }

  onSubmit() {
    const newSubject = {
      ...this.subject,
      surveyEditionId: this.editionId,
      parentSubjectId: this.isSubsubject ? this.subject.parentSubjectId : null
    };

    this.subjectService.createSubject(this.editionId, newSubject as SubjectResponseDTO)
      .subscribe({
        next: (createdSubject) => {
          this.subjectCreated.emit(createdSubject);
          this.closeModal();
        },
        error: (err) => console.error('Error creating subject:', err)
      });
  }

  private resetForm() {
    this.subject = {
      title: '',
      parentSubjectId: null,
      surveyEditionId: this.editionId
    };
    this.isSubsubject = false;
  }
}