export interface Certification {
    id: number;
    description: string;
    score: number;
    createdAt: Date;
    updatedAt: Date | null;
    session: {
        id: number;
        title: string;
        formation: {
            id: number;
            title: string;
            description: string;
        };
        startDate: string; // DateOnly is represented as string in API responses
        endDate: string;   // DateOnly is represented as string in API responses
    };
    user: {
        id: number;
        userName: string;
        email: string;
        // Include any other user properties from UserDto
    };
}