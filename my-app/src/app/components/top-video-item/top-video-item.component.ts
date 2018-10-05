import { Component, OnInit, Input } from '@angular/core';
import * as M from '../../models';
import { PlaylistService } from '../../services/playlist/playlist.service';
import { Observable } from 'rxjs';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-top-video-item',
  templateUrl: './top-video-item.component.html',
  styleUrls: ['./top-video-item.component.scss']
})
export class TopVideoItemComponent implements OnInit {
  @Input() video: M.YoutubeSearchResult;
  @Input() formMode = false;
  playlists: Observable<M.Playlist[]>;
  player: YT.Player;
  draggable = {
    // note that data is handled with JSON.stringify/JSON.parse
    // only set simple data or POJO's as methods will be lost 
    data: this.video ,
    effectAllowed:  'linkMove',
    disable:  false,
    handle:  false
  };
  constructor(private playlistService: PlaylistService,
              private userService: UserService) { }

  ngOnInit() {
    this.draggable.data = this.video;
    this.getPlaylist();
  }
  private getPlaylist(): void {
    this.playlists = this.playlistService.getItemObserver(
      M.CollectionName.playlist,
      this.userService.getCurrentUser().id
    );
  }

  addToList(list: M.Playlist) {
    this.video.id = {videoId: <any>this.video.id , kind : ''};
    if (this.playlistService.addVideoToLocallist(list , this.video)) {
    this.playlistService.addVideoTolist(list);
    }
  }

}
