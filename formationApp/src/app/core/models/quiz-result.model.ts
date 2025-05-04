export interface QuizAttempt {
    id: number;
    userId: number;
    quizId: number;
    sessionId: number;
    startTime: Date;
    attemptedAt: Date;
    isCompleted: boolean;
    score: number;
    hasPassed: boolean;
    createdAt: Date;
    user?: {
        id: number;
        userName: string;
        email: string;
        firstName?: string;
        lastName?: string;
    };
    quiz?: {
        id: number;
        title: string;
    };
    session?: {
        id: number;
        title: string;
        formation?: {
            id: number;
            title: string;
        }
    };
    questionResponses?: QuestionResponse[];
}

export interface QuestionResponse {
    id: number;
    questionId: number;
    selectedAnswerIds: number[];
    question?: {
        id: number;
        title: string;
        answers: {
            id: number;
            text: string;
            isCorrect: boolean;
        }[];
    };
}

export interface FormationResults {
    formationId: number;
    formationTitle: string;
    attempts: QuizAttempt[];
    sessionResults: {
        sessionId: number;
        sessionTitle: string;
        attempts: QuizAttempt[];
    }[];
}
