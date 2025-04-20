import { User } from "./user.model";

export interface Group {
    id: number;
    name: string;
    description?: string;
    createdAt: Date;
    updatedAt?: Date;
    deletedAt?: Date;
    enable: boolean;
    users: User[];
    count: number;
} 