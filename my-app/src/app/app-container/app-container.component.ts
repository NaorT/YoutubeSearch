import { Component, OnInit, enableProdMode } from '@angular/core';
import { YoutubeService } from '../youtube.service';
import { UserService } from '../user.service';
import { PlaylistService } from '../playlist.service';
import * as M from '../models';

@Component({
  selector: 'app-app-container',
  templateUrl: './app-container.component.html',
  styleUrls: ['./app-container.component.scss']
})
export class AppContainerComponent implements OnInit {
  searchResults: M.YoutubeSearchResult[];
  player: YT.Player;

  constructor(
    private userService: UserService,
    private youtubeService: YoutubeService,
    private playlistService: PlaylistService
  ) {}

  ngOnInit() {
    this.userService.initUserData();
  }
  joinPlaylist($event) {
    this.playlistService.addUserToListeners($event , this.userService.getCurrentUser().id).subscribe(o => {
      console.log('great');
    });
    // this.youtubeService.joinPlaylist(event).
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
