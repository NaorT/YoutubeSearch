import { Component, OnInit, Input } from '@angular/core';
import * as M from '../../models';
import { PlaylistService } from '../../services/playlist/playlist.service';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-explore-playlist-item',
  templateUrl: './explore-playlist-item.component.html',
  styleUrls: ['./explore-playlist-item.component.scss']
})
export class ExplorePlaylistItemComponent implements OnInit {
  @Input() list: M.Playlist;
  videos: M.YoutubeSearchResult[];
  constructor(private playlistService: PlaylistService,
              private userService: UserService) { }

  ngOnInit() {
    this.init();
  }

  init() {
    this.videos = JSON.parse(JSON.stringify(this.list.videos));
    let counter = 0;
    while (this.videos.length < 10) {
      this.videos.push(this.list.videos[counter]);
      counter++;
      if (counter >= this.list.videos.length) {
        counter = 0;
      }
    }
  }

  joinList() {
    console.log(123);
    const userId = this.userService.getCurrentUser().id;
    this.playlistService.addUserToListeners(this.list.pin_code , userId).subscribe(() => {});
  }

}
