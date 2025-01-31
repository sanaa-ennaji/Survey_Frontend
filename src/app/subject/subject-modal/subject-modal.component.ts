import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SubjectResponseDTO } from '../../models/subject.model';
import { SubjectService } from '../../services/subject.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-subject-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './subject-modal.component.html',
  styleUrls: ['./subject-modal.component.css'],
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
    surveyEditionId: this.editionId,
  };

  constructor(private subjectService: SubjectService) {}

  // Add this getter
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
      parentSubjectId: this.isSubsubject ? this.subject.parentSubjectId : null,
    };

    console.log('Creating subject with payload:', newSubject); // Debugging

    this.subjectService
      .createSubject(this.editionId, newSubject as SubjectResponseDTO)
      .subscribe({
        next: (createdSubject) => {
          this.subjectCreated.emit(createdSubject);
          this.closeModal();
        },
        error: (err) => {
          console.error('Error creating subject:', err);
          console.error('Error details:', err.error); // Log the error details
        },
      });
  }

  private resetForm() {
    this.subject = {
      title: '',
      parentSubjectId: null,
      surveyEditionId: this.editionId,
    };
    this.isSubsubject = false;
  }
}