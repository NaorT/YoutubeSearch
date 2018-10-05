import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import * as M from '../../models';
import { PlaylistService } from '../../services/playlist/playlist.service';
import { ReturnStatement } from '@angular/compiler';

@Component({
  selector: 'app-explore-playlists',
  templateUrl: './explore-playlists.component.html',
  styleUrls: ['./explore-playlists.component.scss']
})
export class ExplorePlaylistsComponent implements OnInit {
  expoleLists: M.Playlist[] = [];
  constructor(private playlistService: PlaylistService) {}

  ngOnInit() {
    this.playlistService
      .getExploreLists()
      .subscribe((playlists: M.Playlist[]) => {
        for (let i = 0; i <= playlists.length; i++) {
          if (i >= 3) {
            return;
          }
          this.expoleLists.push(playlists[i]);
        }
      });
  }
}
