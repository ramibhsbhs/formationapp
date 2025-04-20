import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Group } from '../models/group.model';
import { environment } from '../../../environments/environment';

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

    createGroup(newGroup: Partial<Group>) {
       return this.http.post<Group>(this.apiUrl, newGroup);
    }
} 