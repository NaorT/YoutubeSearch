import { Component, OnInit, enableProdMode } from '@angular/core';
import { YoutubeService } from '../../services/youtube/youtube.service';
import { UserService } from '../../services/user/user.service';
import { PlaylistService } from '../../services/playlist/playlist.service';
import * as M from '../../models';

@Component({
  selector: 'app-app-container',
  templateUrl: './app-container.component.html',
  styleUrls: ['./app-container.component.scss']
})

export class AppContainerComponent implements OnInit {
  searchResults: M.YoutubeSearchResult[];

  constructor(
    private userService: UserService,
    private youtubeService: YoutubeService,
    private playlistService: PlaylistService
  ) {}

  ngOnInit() {
    this.userService.initUserData();
  }
  joinPlaylist($event) {
    this.playlistService.addUserToListeners($event , this.userService.getCurrentUser().id).subscribe(o => {});
  }

  searchVideos($event) {
    if ($event) {
        this.youtubeService.searchVideos($event).subscribe((results: M.YoutubeSearchResult[]) => {
          console.log(results['items']);
          this.searchResults = results['items'];
        });
    } else {
      this.searchResults = undefined;
    }
  }
}
