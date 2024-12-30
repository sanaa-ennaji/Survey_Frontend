export interface SubjectResponseDTO {
    id: number;
    title: string;
    parentSubjectId: number;
    subSubjects: { id: number; title: string }[];
    surveyEditionId: number;
    questions: any[];
  }