export interface Question {
    id: number;
    text: string;
    answerCount: number;
    questionType: 'MULTIPLE_CHOICE' | 'SINGLE_CHOICE' | 'TEXT';
  }
  