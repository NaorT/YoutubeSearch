import { Injectable, OnInit } from '@angular/core';
import * as M from '../../models';
import { Observable } from 'rxjs';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from '@angular/fire/firestore';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class FirebaseHandlerService {
  playlistCollection: AngularFirestoreCollection<M.Playlist>;
  playlists: Observable<M.Playlist[]>;

  constructor(private asf: AngularFirestore) {}

  public getExploreLists(): Observable<any> {
    return this.asf.collection('playlist', ref => ref.limit(20)).valueChanges();
  }

  public getItemObserver(collectionName: M.CollectionName, id: string): Observable<any> {
    return this.asf.collection('playlist', ref => ref.where('listeners', 'array-contains', id)).valueChanges();
  }
  public setItem(collectionName: M.CollectionName, item: M.Playlist): void {
    this.asf.doc(`${collectionName}/${item.id}`).set(item);
  }
  public editPlaylist( playlistId: string, newPlayList: M.Playlist) {
      this.asf.doc(`playlist/${playlistId}`).set(newPlayList, {merge: true});
  }
  public deleteList(listId: string) {
    this.asf.doc(`playlist/${listId}`).delete();
  }

  public validatePinCode(pinCode: string): Observable<any> {
    return this.asf.collection('playlist', ref => ref.where('pin_code', '==', pinCode)).get();
  }
}


