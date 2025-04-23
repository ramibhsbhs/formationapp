export interface Quiz {
    id: number;
    title: string;
    questions: Question[];
    createdAt: Date;
}

export interface Question {
    id?: number;
    quizId?: number;
    title: string;
    options: string[];
    correctAnswer: number;
    points: number;
    answers : Answer[]
} 

interface Answer {
  id: number;
  text: string;
  isCorrect: boolean;
  questionId: number;
  createdAt: Date;
  updatedAt: Date | null;
  deletedAt: Date | null;
  enable: boolean;
}