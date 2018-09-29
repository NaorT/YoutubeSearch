import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import * as M from '../../models';
import { PlaylistService } from '../../services/playlist/playlist.service';

@Component({
  selector: 'app-explore-playlists',
  templateUrl: './explore-playlists.component.html',
  styleUrls: ['./explore-playlists.component.scss']
})
export class ExplorePlaylistsComponent implements OnInit {
  expoleLists: Observable<M.Playlist[]>;
  constructor(private playlistService: PlaylistService) { }

  ngOnInit() {
    this.expoleLists = this.playlistService.getExploreLists();
  }

}
