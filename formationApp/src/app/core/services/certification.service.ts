import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Certification } from '../models/certification.model';

@Injectable({
  providedIn: 'root'
})
export class CertificationService {

  private apiUrl = `${environment.baseUrl}/certification`;

  constructor(private http: HttpClient) { }
  getCertifications() {
    return this.http.get<Certification[]>(this.apiUrl);
  }
  getUserCertifications() {
    return this.http.get<Certification[]>(this.apiUrl + '/user');
  }

  getCertificationById(id: number) {
    return this.http.get<Certification>(`${this.apiUrl}/${id}`);
  }
}
