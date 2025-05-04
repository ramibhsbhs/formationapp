
export interface CondidatFormation {
    id: number
    title: string
    description: string
    content: string
    category: string
    sessions: Session[]
    modules: Module[]
    quizId?: number
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
}

export interface Attachment {
    id: number;
    lien: string;
    type: string;
} 