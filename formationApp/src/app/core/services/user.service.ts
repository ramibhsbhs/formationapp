import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = `${environment.baseUrl}/users`;

  constructor(private http: HttpClient) { }

  /**
   * Récupère les informations d'un utilisateur par son ID
   */
  getCurrentUserProfile(): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/current`);
  }

  /**
   * Met à jour le profil d'un utilisateur, y compris son image de profil
   * @param id ID de l'utilisateur
   * @param userData Données de l'utilisateur (userName, email)
   * @param profileImage Image de profil (optionnelle)
   */
  updateUserProfile(id: number, userData: { userName: string, email: string }, profileImage?: File | null): Observable<User> {
    const formData = new FormData();

    // Ajouter les données utilisateur au FormData
    formData.append('userName', userData.userName);
    formData.append('email', userData.email);

    // Ajouter l'image de profil si elle existe
    if (profileImage) {
      formData.append('profileImage', profileImage, profileImage.name);
    }

    return this.http.put<User>(`${this.apiUrl}/current`, formData);
  }

  /**
   * Change le mot de passe d'un utilisateur
   * @param passwordData Données du mot de passe (currentPassword, newPassword, confirmPassword)
   */
  changePassword(passwordData: { currentPassword: string, newPassword: string, confirmPassword: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/change-password`, passwordData);
  }

  /**
   * Récupère tous les utilisateurs (admin seulement)
   */
  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  /**
   * Récupère les utilisateurs par groupe (admin et superviseurs)
   */
  getUsersByGroup(groupId: number): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/group/${groupId}`);
  }

  /**
   * Désactive un utilisateur (admin seulement)
   */
  disableUser(userId: number): Observable<any> {
    return this.http.put(`${this.apiUrl}/${userId}/disable`, {});
  }

  /**
   * Active un utilisateur (admin seulement)
   */
  enableUser(userId: number): Observable<any> {
    return this.http.put(`${this.apiUrl}/${userId}/enable`, {});
  }

  /**
   * Supprime un utilisateur (admin seulement)
   */
  deleteUser(userId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${userId}`);
  }
}
