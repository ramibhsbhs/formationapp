import { Group } from "./group.model";
import { Role } from "./role.model";

export interface User {
    id: number;
    email: string;
    userName: string;
    imageUrl?: string;
    groupId?: number;
    group?: Group;
    roles?: string[];
    isActive?: boolean;
}