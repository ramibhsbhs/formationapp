import { Session } from "./session.model";

export interface Formation {
    id?: number;
    title: string;
    description: string;
    content: string;
    sessions: Session[];
    modules: Module[];
    groups: number[]; // Array of group IDs
}



export interface Module {
    id?: number;
    description: string;
    title: string;
    position: number;
    formationId: number;
    attachments: Attachment[];
}

export interface Attachment {
    id?: number;
    // Add attachment properties as needed
} 