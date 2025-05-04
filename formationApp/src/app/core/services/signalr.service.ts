// import { Injectable } from '@angular/core';
// import { HubConnection, HubConnectionBuilder, LogLevel } from '@microsoft/signalr';
// import { BehaviorSubject, Observable, take } from 'rxjs';
// import { environment } from 'src/environments/environment';
// import { AuthService } from './auth.service';
// import { Notification } from '../models/notification.model';

// @Injectable({
//   providedIn: 'root'
// })
// export class SignalrService {
//   private hubConnection?: HubConnection;
//   private hubUrl = environment.baseUrl + '/hubs/presence';
  
//   // Observable pour les utilisateurs en ligne
//   private onlineUsersSource = new BehaviorSubject<number[]>([]);
//   public onlineUsers$ = this.onlineUsersSource.asObservable();
  
//   // Observable pour les notifications reçues
//   private receivedNotificationSource = new BehaviorSubject<Notification | null>(null);
//   public receivedNotification$ = this.receivedNotificationSource.asObservable();

//   constructor(private authService: AuthService) {}

//   /**
//    * Crée et démarre la connexion au hub SignalR
//    */
//   public createHubConnection(): void {
//     // Récupérer le token d'authentification
//     this.authService.currentUser$.pipe(take(1)).subscribe({
//       next: user => {
//         if (!user) return;
        
//         // Créer la connexion au hub avec le token d'authentification
//         this.hubConnection = new HubConnectionBuilder()
//           .withUrl(this.hubUrl, {
//             accessTokenFactory: () => user.token
//           })
//           .withAutomaticReconnect()
//           .configureLogging(LogLevel.Information)
//           .build();
        
//         // Démarrer la connexion
//         this.startConnection();
//       }
//     });
//   }

//   /**
//    * Démarre la connexion au hub et configure les écouteurs d'événements
//    */
//   private startConnection(): void {
//     if (!this.hubConnection) return;
    
//     this.hubConnection.start()
//       .then(() => {
//         console.log('SignalR connection started');
//         this.registerSignalREventListeners();
//       })
//       .catch(error => {
//         console.error('Error starting SignalR connection:', error);
//         // Réessayer après un délai
//         setTimeout(() => this.startConnection(), 5000);
//       });
//   }

//   /**
//    * Enregistre les écouteurs d'événements SignalR
//    */
//   private registerSignalREventListeners(): void {
//     if (!this.hubConnection) return;
    
//     // Écouter l'événement "GetOnlineUsers"
//     this.hubConnection.on('GetOnlineUsers', (userIds: number[]) => {
//       this.onlineUsersSource.next(userIds);
//     });
    
//     // Écouter l'événement "UserIsOnline"
//     this.hubConnection.on('UserIsOnline', (userId: number) => {
//       const currentUsers = [...this.onlineUsersSource.value];
//       if (!currentUsers.includes(userId)) {
//         currentUsers.push(userId);
//         this.onlineUsersSource.next(currentUsers);
//       }
//     });
    
//     // Écouter l'événement "UserIsOffline"
//     this.hubConnection.on('UserIsOffline', (userId: number) => {
//       const currentUsers = this.onlineUsersSource.value.filter(id => id !== userId);
//       this.onlineUsersSource.next(currentUsers);
//     });
    
//     // Écouter l'événement "ReceiveNotification"
//     this.hubConnection.on('ReceiveNotification', (notification: Notification) => {
//       console.log('Notification reçue via SignalR:', notification);
//       this.receivedNotificationSource.next(notification);
//     });
//   }

//   /**
//    * Arrête la connexion au hub
//    */
//   public stopHubConnection(): void {
//     if (this.hubConnection) {
//       this.hubConnection.stop()
//         .then(() => {
//           console.log('SignalR connection stopped');
//         })
//         .catch(error => {
//           console.error('Error stopping SignalR connection:', error);
//         });
//     }
//   }
// }
