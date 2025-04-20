import { Formation } from './formation.model';

export type SessionStatus = 'Terminée' | 'En cours' | 'Pas encore';

export interface Session {
    id?: string;
    title: string;
    description: string;
    startDate: Date;
    endDate: Date;
    createdAt?: Date;
    updatedAt?: Date;
    createdBy?: string;
    participants?: string[];
    formation: Formation;
    status?: SessionStatus;
}

