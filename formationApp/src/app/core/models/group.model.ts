import { User } from "./user.model";

export class Group {
    id: number;
    name: string;
    description?: string;
    createdAt: Date;
    updatedAt?: Date;
    deletedAt?: Date;
    enable: boolean;
    users: User[];

    constructor(id: number, name: string, createdAt: Date, enable: boolean, users: User[] = []) {
        this.id = id;
        this.name = name;
        this.createdAt = createdAt;
        this.enable = enable;
        this.users = users;
    }

    get count(): number {
        return this.users.length;
    }
} 