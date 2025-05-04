import { Formation } from './formation.model';

export type SessionStatus = 'Terminée' | 'En cours' | 'Pas encore';

export class Session {
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

    constructor(data: Partial<Session>) {
        this.id = data.id;
        this.title = data.title ?? '';
        this.description = data.description ?? '';
        this.startDate = data.startDate ? new Date(data.startDate) : new Date();
        this.endDate = data.endDate ? new Date(data.endDate) : new Date();
        this.createdAt = data.createdAt ? new Date(data.createdAt) : undefined;
        this.updatedAt = data.updatedAt ? new Date(data.updatedAt) : undefined;
        this.createdBy = data.createdBy;
        this.participants = data.participants ?? [];
        if (!data.formation) {
            throw new Error('Formation is required for Session');
        }
        this.formation = data.formation;
    }

    get status(): SessionStatus {
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const start = new Date(this.startDate);
        const end = new Date(this.endDate);
        start.setHours(0, 0, 0, 0);
        end.setHours(0, 0, 0, 0);

        if (today < start) {
            return 'Pas encore'; // Not yet started
        } else if (today > end) {
            return 'Terminée';   // Finished
        } else {
            return 'En cours';   // Ongoing
        }
    }
}
