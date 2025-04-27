export interface LoggedIn {
    id: number,
    username: string,
    email: string,
    token: string,
    roles: string[],
    redirectUrl: string
    imageUrl: string
}