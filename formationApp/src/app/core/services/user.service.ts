import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = `${environment.baseUrl}/users`;

  constructor(private http: HttpClient) { }

  /**
   * Récupère les informations d'un utilisateur par son ID
   */
  getUserById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  /**
   * Met à jour le profil d'un utilisateur
   */
  updateUserProfile(userData: any, profileImage?: File | null): Observable<any> {
    const formData = new FormData();
    
    // Ajouter les données utilisateur au FormData
    Object.keys(userData).forEach(key => {
      formData.append(key, userData[key]);
    });
    
    // Ajouter l'image de profil si elle existe
    if (profileImage) {
      formData.append('profileImage', profileImage, profileImage.name);
    }
    
    return this.http.put(`${this.apiUrl}/${userData.id}`, formData);
  }

  /**
   * Change le mot de passe d'un utilisateur
   */
  changePassword(passwordData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/change-password`, passwordData);
  }

  /**
   * Récupère tous les utilisateurs
   */
  getAllUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  /**
   * Récupère les utilisateurs par groupe
   */
  getUsersByGroup(groupId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/group/${groupId}`);
  }

  /**
   * Désactive un utilisateur
   */
  disableUser(userId: number): Observable<any> {
    return this.http.put(`${this.apiUrl}/${userId}/disable`, {});
  }

  /**
   * Active un utilisateur
   */
  enableUser(userId: number): Observable<any> {
    return this.http.put(`${this.apiUrl}/${userId}/enable`, {});
  }

  /**
   * Supprime un utilisateur
   */
  deleteUser(userId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${userId}`);
  }
}
