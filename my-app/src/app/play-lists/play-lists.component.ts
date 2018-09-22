import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UserService } from '../user.service';
import * as M from '../models';
import { Observable } from 'rxjs';
import { PlaylistService } from '../playlist.service';

@Component({
  selector: 'app-play-lists',
  templateUrl: './play-lists.component.html',
  styleUrls: ['./play-lists.component.scss']
})
export class PlayListsComponent implements OnInit {
  selected = new FormControl(0);
  playlists: Observable<M.Playlist[]>;

  constructor(
    private playlistService: PlaylistService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.getPlaylist();
  }
  private getPlaylist(): void {
    this.playlists = this.playlistService.getItemObserver(
      M.CollectionName.playlist,
      this.userService.getCurrentUser().id
    );
  }


}
