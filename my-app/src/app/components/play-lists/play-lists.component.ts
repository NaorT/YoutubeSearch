import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UserService } from '../../services/user/user.service';
import * as M from '../../models';
import { Observable } from 'rxjs';
import { PlaylistService } from '../../services/playlist/playlist.service';

@Component({
  selector: 'app-play-lists',
  templateUrl: './play-lists.component.html',
  styleUrls: ['./play-lists.component.scss']
})
export class PlayListsComponent implements OnInit {
  selected = new FormControl(0);
  playlists: M.Playlist[];
  isOpen = false;
  playingVideo: M.YoutubeSearchResult;
  playingVideoTitle = '';
  playIsCurrntTab = false;
  currentPlaylist: M.Playlist;
  constructor(
    private playlistService: PlaylistService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.getPlaylist();
    this.playlistService
      .subscribeToPlayVideo()
      .subscribe((playingVideo: M.YoutubeSearchResult) => {
          this.currentPlaylist = this.playlistService.getCurrentPlayLIst();
          this.playingVideo = playingVideo;
          this.playingVideoTitle = playingVideo.snippet.title;
      });
  }
  private getPlaylist(): void {
    this.playlistService
      .getItemObserver(
        M.CollectionName.playlist,
        this.userService.getCurrentUser().id
      )
      .subscribe(playlists => {
        this.playlists = playlists;
      });
  }

  toggleTabView() {
    this.isOpen = !this.isOpen;
    this.updateVideoDisplay();
  }

  tabChanged($event) {
    this.playIsCurrntTab = $event.index === this.playlists.length + 1;
    this.updateVideoDisplay();
  }

  updateVideoDisplay() {
    let time = 300 ;
    if (!this.playIsCurrntTab || !this.isOpen) {
      time = 0;
    }
    setTimeout(() => {
      this.playlistService.setVideoOpen(this.playIsCurrntTab && this.isOpen);
    }, time);
  }
}
