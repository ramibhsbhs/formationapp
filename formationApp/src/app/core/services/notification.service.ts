import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Notification } from '../models/notification.model';
import { LoggedIn } from '../models/loggedIn';
import { HubConnection, HubConnectionBuilder, LogLevel } from '@microsoft/signalr';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private apiUrl = `${environment.baseUrl}/notification`;
  // Propriétés pour SignalR
  private hubConnection?: HubConnection;
  hubUrl = environment.hubsUrl;

  private notificationSound: HTMLAudioElement;


  // BehaviorSubject pour stocker toutes les notifications
  private notificationsSubject = new BehaviorSubject<Notification[]>([]);
  public notifications$ = this.notificationsSubject.asObservable();



  constructor(private http: HttpClient) {
    this.notificationSound = new Audio('assets/audio/notification-1.wav');
  }
  /**
   * Charge toutes les notifications de l'utilisateur
   * Si l'utilisateur est sur la page de notifications, les marque comme lues
   */
  private loadNotifications(): void {
    this.http.get<Notification[]>(`${this.apiUrl}/user`).subscribe({
      next: (notifications) => {
        this.notificationsSubject.next(notifications);
      },
      error: (err) => {
        console.error('Erreur lors du chargement des notifications', err);
      }
    });
  }

  /**
   * Initialise les notifications pour l'utilisateur connecté
   * À appeler après la connexion ou au chargement de l'application
   */
  initNotifications(user: LoggedIn): void {
    // Réinitialiser d'abord pour éviter les doublons
    this.resetNotifications();
    // Puis charger les notifications
    this.loadNotifications();
    this.createHubConnection(user); //  creattion de pont entre application angular et application dotnet 
  }

  /**
   * Réinitialise les notifications
   * À appeler lors de la déconnexion
   */
  resetNotifications(): void {
    this.notificationsSubject.next([]);
    this.stopHubConnection()
  }

  /**
   * Crée et démarre la connexion au hub SignalR
   */
  private createHubConnection(user: LoggedIn): void {
    this.hubConnection = new HubConnectionBuilder()
      .withUrl(this.hubUrl + 'presence', {
        skipNegotiation: false,
        // transport: signalR.HttpTransportType.WebSockets,
        // credentials: "omit",
        accessTokenFactory: () => user.token
      })
      .configureLogging(LogLevel.Information)
      .withAutomaticReconnect()
      .build();

    this.hubConnection.start().catch(error => console.log(error));
    

    // ecouter les evenements avec le nom "ReceiveNotification" et faire le logic necessaire
    this.hubConnection.on('ReceiveNotification', (notification: Notification) => {
      this.notificationsSubject.next([...this.notificationsSubject.value, notification]); // ajouter la nouvelle notification a la liste des notifications
      this.notificationSound.play().catch(err => console.error('Erreur lors de la lecture du son:', err)); // lecture du son de notification
    });
  }


  /**
   * Arrête la connexion au hub
   */
  private stopHubConnection(): void {
    if (this.hubConnection) {
      this.hubConnection.stop()
        .then(() => {
          console.log('SignalR connection stopped');
        })
        .catch(error => {
          console.error('Error stopping SignalR connection:', error);
        });
    }
  }

  /**
   * Indique que l'utilisateur entre dans la page de notifications
   */
  enterNotificationsPage(): void {
    // Charger les notifications fraîches
    this.loadNotifications();
  }

  /**
   * Indique que l'utilisateur quitte la page de notifications
   * Marque automatiquement toutes les notifications comme lues
   */
  exitNotificationsPage(): void {
    // Marquer toutes les notifications comme lues
    this.markAllAsRead().subscribe();
  }



  /**
   * Récupère toutes les notifications de l'utilisateur connecté
   * Utilise le BehaviorSubject pour retourner les notifications en cache
   */
  // getUserNotifications(): Observable<Notification[]> {
  //   // Retourne les notifications en cache
  //   return this.notifications$;
  // }

  /**
   * Marque toutes les notifications comme lues et met à jour le cache
   */
  markAllAsRead(): Observable<any> {
    return this.http.put(`${this.apiUrl}/read-all`, {}).pipe(
      tap(() => {
        // Mettre à jour le cache local
        const notifications = this.notificationsSubject.value;
        const updatedNotifications = notifications.map(n => ({ ...n, received: true }));
        this.notificationsSubject.next(updatedNotifications);
      })
    );
  }
}
