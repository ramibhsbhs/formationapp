export interface Feedback {
    id: number;
    description: string;
    value: number;
    userId: number;
    user: {
        id: number;
        userName: string;
        email: string;
    };
    formationId: number;
    formation: {
        id: number;
        title: string;
        description: string;
    };
    createdAt: Date;
    updatedAt: Date;
}
