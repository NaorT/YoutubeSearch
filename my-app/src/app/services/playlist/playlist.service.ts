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
  private videoOpenObserver = new Rx.Subject();
  private autoplay = true;

  constructor(private userService: UserService,
              private firebaseService: FirebaseHandlerService,
              private toastr: ToastrService) { }

  getCurrentPlayLIst(): M.Playlist {
    return this.currentPlayLIst;
  }
  getAutoplay() {
    return this.autoplay;
  }
  toggleChange() {
    this.autoplay = !this.autoplay;
  }

  getNextVideo(video: M.YoutubeSearchResult) {
    if  (this.autoplay) {
      // for (let listVideo of this.currentPlayLIst.videos) {
        for (let i = 0; i <= this.currentPlayLIst.videos.length; i++) {
        if (video.id === this.currentPlayLIst.videos[i].id &&
          this.currentPlayLIst.videos[i + 1]) {
            this.setVideoPlayed(this.currentPlayLIst.videos[i + 1]);
            return;
        }
      }
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
  setVideoOpen(open: boolean) {
    this.videoOpenObserver.next(open);
 }
  subscribeToOpenVideo() {
    return this.videoOpenObserver;
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
          console.log(userId);
          console.log(data);
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
      this.firebaseService.editPlaylist(playlist.id , playlist);
      o.next();
      o.complete();
    });
  }

  public addVideoTolist(list: M.Playlist) {
    this.firebaseService.editPlaylist(list.id , list);
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


  public getExploreLists(): Observable<M.Playlist[]> {
    return new Observable ((o) => {
      const userId = this.userService.getCurrentUser().id;
      this.firebaseService.getExploreLists().subscribe((playlists: M.Playlist[]) => {
        const explorePlaylist: M.Playlist[] = [];
        for (const list of playlists) {
          if (list.listeners.indexOf(userId) < 0 ) {
            explorePlaylist.push(list);
          }
        }
        o.next(explorePlaylist);
        o.complete();
      });
    });
  }

}
