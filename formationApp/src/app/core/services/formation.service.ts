import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Formation } from '../models/formation.model';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class FormationService {
    private apiUrl = `${environment.baseUrl}/formation`;

    constructor(private http: HttpClient) { }

    createFormation(formation: Formation): Observable<Formation> {
        return this.http.post<Formation>(this.apiUrl, formation);
    }

    getFormations() {
        return this.http.get<Formation[]>(this.apiUrl);
    }

    getFormation(id: number): Observable<Formation> {
        return this.http.get<Formation>(`${this.apiUrl}/${id}`);
    }

    updateFormation(id: number, formation: Formation): Observable<Formation> {
        return this.http.put<Formation>(`${this.apiUrl}/${id}`, formation);
    }

    deleteFormation(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }

    updateFormationContent(id: number, formationContent: any): Observable<Formation> {
        return this.http.put<Formation>(`${this.apiUrl}/${id}/content`, formationContent);
    }

    updateFormationCategory(id: number, category: any): Observable<Formation> {
        return this.http.put<Formation>(`${this.apiUrl}/${id}/category`, category);
    }

    updateFormationGroups(id: number, groupIds: any): Observable<Formation> {
        return this.http.put<Formation>(`${this.apiUrl}/${id}/groups`, groupIds);
    }
} 