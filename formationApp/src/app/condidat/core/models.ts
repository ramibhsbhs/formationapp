
export interface CondidatFormation {
    id: number
    title: string
    description: string
    content: string
    category: string
    sessions: Session[]
    modules: Module[]
    quizId?: number // Quiz final
    finalQuizPassed?: boolean // Indique si l'utilisateur a réussi le quiz final
    canPassFinalWithoutModules?: boolean // Indique si l'utilisateur peut passer le quiz final sans avoir réussi tous les modules
    userProgress?: ModuleProgress[] // Progression de l'utilisateur dans les modules
}

export interface Session {
    sessionId: number
    sessionTitle: string
    startDate: string
    endDate: string
    hasAttempted: boolean
    score: any
    canRepass: boolean
}

export interface Module {
    id: number;
    title: string;
    description: string;
    position: number;
    attachments: Attachment[];
    quizId?: number; // ID du quiz associé au module
    maxAttempts: number; // Nombre maximum de tentatives pour le quiz du module (0 = illimité)
    isCompleted?: boolean; // Indique si le module est complété
    isAccessible?: boolean; // Indique si le module est accessible
}

export interface ModuleProgress {
    moduleId: number;
    isCompleted: boolean;
    quizAttempted: boolean;
    quizPassed: boolean;
    score?: number;
}

export interface Attachment {
    id: number;
    lien: string;
    type: string;
}