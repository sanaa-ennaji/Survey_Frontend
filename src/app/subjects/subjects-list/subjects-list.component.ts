import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubjectService } from '../../services/subject.service';
import{SubjectResponseDTO } from '../../models/subject.model'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects-list.component.html',
  imports : [CommonModule],
  providers: [SubjectService],
})
export class SubjectsListComponent implements OnInit {
  subjects: SubjectResponseDTO[] = [];
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
      error: (err) => console.error('Error loading subjects', err)
    });
  }
}
