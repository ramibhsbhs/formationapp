import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Group } from '../models/group.model';
import { environment } from '../../../environments/environment';
import { User } from '../models/user.model';

@Injectable({
    providedIn: 'root'
})
export class GroupService {

    private apiUrl = `${environment.baseUrl}/group`;

    constructor(private http: HttpClient) { }

    getGroups(): Observable<Group[]> {
        return this.http.get<Group[]>(this.apiUrl);
    }

    getGroup(id: number): Observable<Group> {
        return this.http.get<Group>(`${this.apiUrl}/${id}`);
    }

    /**
     * Récupère le groupe du superviseur connecté
     * @returns Le groupe du superviseur
     */
    getSupervisorGroup(): Observable<Group> {
        return this.http.get<Group>(`${this.apiUrl}/current`);
    }

    createGroup(newGroup: Partial<Group>) {
        return this.http.post<Group>(this.apiUrl, newGroup);
    }

    createUser(model: any) {
        return this.http.post<User>(`${environment.baseUrl}/users/create-user`, model);
    }
}