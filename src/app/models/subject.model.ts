
import { Question } from './question.model';
export interface SubjectResponseDTO {
    id: number;
    title: string;
    parentSubjectId: number | null;
    subSubjects: { id: number; title: string; questions: Question[] }[];
    surveyEditionId: number;
    questions: Question[];
  }