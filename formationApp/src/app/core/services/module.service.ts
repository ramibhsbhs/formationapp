import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Module } from '../models/formation.model';

@Injectable({
  providedIn: 'root'
})
export class ModuleService {

  private apiUrl = `${environment.baseUrl}/module`;

  constructor(private http: HttpClient) { }

  createModule(module: Module) {
    return this.http.post<Module>(this.apiUrl, module);
  }

  getModules() {
    return this.http.get<Module[]>(this.apiUrl);
  }

  getModule(id: number) {
    return this.http.get<Module>(`${this.apiUrl}/${id}`);
  }

  updateModule(id: number, module: Module) {
    return this.http.put<Module>(`${this.apiUrl}/${id}`, module);
  }

  deleteModule(id: number){
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
