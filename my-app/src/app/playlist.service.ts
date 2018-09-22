import { Injectable } from '@angular/core';
import { FirebaseHandlerService } from './firebase-handler.service';
import { Observable } from 'rxjs';
import * as M from './models';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  constructor(private firebaseService: FirebaseHandlerService) { }

  public getItemObserver(collectionName: M.CollectionName, qoury: string): Observable<any> {
    return this.firebaseService.getItemObserver(collectionName , qoury );
  }

  public setItem(collectionName: M.CollectionName, item: M.Playlist): void {
    this.firebaseService.setItem(collectionName, item);
  }

  public validatePinCode(pinCode: string) {
    return this.firebaseService.validatePinCode(pinCode);
  }

  public addUserToListeners(pinCode: string, userId: string): Observable<void> {
    return new Observable((o) => {
      const list = this.firebaseService.validatePinCode(pinCode);
      list.subscribe((querySnapshot) => {
        querySnapshot.forEach( (documentSnapshot) => {
          const data: M.Playlist = documentSnapshot.data();
          data.listeners.push(userId);
          this.firebaseService.editUserToListeners(data.id , data);
          o.next();
          o.complete();
        });
      });
    });
  }

  public removeUserFromList(playlist: M.Playlist, userId: string): Observable<void> {
    return new Observable((o) => {
      playlist.listeners.splice(playlist.listeners.indexOf(userId), 1);
      if (playlist.listeners.length <= 0 ) {
        this.firebaseService.deleteList(playlist.id);
      } else {
          this.firebaseService.editUserToListeners(playlist.id , playlist);
        }
      o.next();
      o.complete();
    });
  }

}
