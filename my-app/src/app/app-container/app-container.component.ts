import { Component, OnInit, enableProdMode } from '@angular/core';
import { YoutubeService } from '../youtube.service';
import { GoogleApiService } from 'ng-gapi';
import { UserService } from '../user.service';
import { PlaylistService } from '../playlist.service';


@Component({
  selector: 'app-app-container',
  templateUrl: './app-container.component.html',
  styleUrls: ['./app-container.component.scss']
})
export class AppContainerComponent implements OnInit {
  vids: any;
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
    this.youtubeService.searchVideos($event).subscribe((vid: any) => {
    this.vids = vid;
    });
  }
  savePlayer(player: any) {
    this.player = player;

    console.log(player);
  }
  onStateChange($event) {
    console.log($event);
  }
}
