/**
 * Type de tentative de quiz
 */
export enum AttemptType {
    /**
     * Quiz de module
     */
    Module = 0,

    /**
     * Quiz final de formation
     */
    Formation = 1
}

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

    // Type de tentative (Module ou Formation)
    attemptType?: AttemptType;

    // ID du module associé (si attemptType = Module)
    moduleId?: number;

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
        startDate?: string;
        endDate?: string;
        formation?: {
            id: number;
            title: string;
        }
    };
    module?: {
        id: number;
        title: string;
        position: number;
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

/**
 * Résultat d'une tentative de quiz
 */
export interface QuizResult {
    score: number;
    passed: boolean;
    attemptId: number;
    attemptType: AttemptType;
    moduleId?: number;
    formationId?: number;
}
