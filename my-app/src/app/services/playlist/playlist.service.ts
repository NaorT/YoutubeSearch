import { Injectable } from '@angular/core';
import { FirebaseHandlerService } from '../firebase-handler/firebase-handler.service';
import { Observable } from 'rxjs';
import * as M from '../../models';
import * as Rx from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {
  private currentPlayLIst: M.Playlist;
  private playVideoObserver = new Rx.Subject();
  private autoplay = true;

  constructor(private firebaseService: FirebaseHandlerService,
              private toastr: ToastrService,
              private userService: UserService) { }
  getAutoplay() {
    return this.autoplay;
  }
  toggleChange() {
    this.autoplay = !this.autoplay;
  }

  getNextVideo(video: M.YoutubeSearchResult) {
    if  (this.autoplay) {
    const postition = this.currentPlayLIst.videos.indexOf(video) + 1;
    this.setVideoPlayed(this.currentPlayLIst.videos[postition]);
    }
    this.setVideoPlayed(undefined);
  }

  updateList(list: M.Playlist) {
    this.currentPlayLIst = list;
  }

  setCurrentList(list: M.Playlist): void  {
    if (!this.currentPlayLIst) {
       this.currentPlayLIst = list;
       return;
    }
    if (this.currentPlayLIst.id !== list.id) {
      this.currentPlayLIst = list;
       return;
    }
  }

  setVideoPlayed(video: M.YoutubeSearchResult) {
     this.playVideoObserver.next(video);
  }

  subscribeToPlayVideo() {
    return this.playVideoObserver;
  }

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
          this.firebaseService.editPlaylist(data.id , data);
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
          this.firebaseService.editPlaylist(playlist.id , playlist);
        }
      o.next();
      o.complete();
    });
  }

  public addVideoTolist(list: M.Playlist) {
    if (!list.isEditeable) {
      if (list.created_by_id === this.userService.getCurrentUser().id) {
            this.firebaseService.editPlaylist(list.id , list);
            return;
      }
      this.toastr.error('Only playlist creator can edit this playlist');
    } else {
      this.firebaseService.editPlaylist(list.id , list);
    }
  }

  public addVideoToLocallist(list: M.Playlist, video: M.YoutubeSearchResult): boolean {
    for (const listVideo of list.videos) {
      if (listVideo.id.videoId === video.id.videoId) {
      this.toastr.error('Video already in list');
        return false;
      }
    }
    list.videos.push(video);
    return true;
  }

}
