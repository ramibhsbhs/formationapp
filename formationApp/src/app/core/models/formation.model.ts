import { Session } from "./session.model";
import { Group } from "./group.model";

export class Formation {
    id?: number;
    title: string;
    description: string;
    content: string;
    sessions: Session[];
    modules: Module[];
    groups: Group[];
    groupIds: number[];
    category: string;
    roleNames: string[];
    finalQuizId?: number;

    constructor(data: Partial<Formation> = {}) {
        this.id = data.id;
        this.title = data.title || '';
        this.description = data.description || '';
        this.content = data.content || '';
        this.sessions = data.sessions || [];
        this.modules = data.modules || [];
        this.groups = data.groups || [];
        this.category = data.category || 'safety';
        this.roleNames = data.roleNames ?? [];
        this.groupIds = data.groupIds || [];
        this.finalQuizId = data.finalQuizId;
    }

    totalUsersCount(): number {
        let sum = 0;
        this.groups.forEach(group => {
            sum += group.users?.length || 0;
        });
        return sum;
    }

    get sessionsCount(): number {
        return this.sessions.length;
    }

    get activeSessionsCount(): number {
        return this.sessions.filter((session: Session) => session.status === 'En cours').length;
    }

    get upcomingSessionsCount(): number {
        return this.sessions.filter((session: Session) => session.status === 'Pas encore').length;
    }

    get completedSessionsCount(): number {
        return this.sessions.filter((session: Session) => session.status === 'Terminée').length;
    }
}

export interface Module {
    id?: number;
    title: string;
    description: string;
    position: number;
    formationId?: number;
    attachments: Attachment[];
    quizId: number;
}

export interface Attachment {
    id?: number;
    lien: string;
    type: string;
    moduleId: number;
}