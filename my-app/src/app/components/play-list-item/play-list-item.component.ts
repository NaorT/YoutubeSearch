import { Component, OnInit, Output, Input, ChangeDetectionStrategy, AfterViewInit } from '@angular/core';
import * as M from '../../models';
import { PlaylistService } from '../../services/playlist/playlist.service';
import { UserService } from '../../services/user/user.service';
import { DragAndDropService } from '../../services/drag-and-drop/drag-and-drop.service';
import reframe from 'reframe.js';

const _window: any = window;

@Component({
  selector: 'app-play-list-item',
  templateUrl: './play-list-item.component.html',
  styleUrls: ['./play-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayListItemComponent implements OnInit, AfterContentInit {
  @Input() playlist: M.Playlist;
  // player: YT.Player;
  public yt_player;

  constructor(private playlistService: PlaylistService,
              private userService: UserService,
              private dragAndDropService: DragAndDropService) { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    const doc = window.document;
    const playerApi = doc.createElement('script');
    playerApi.type = 'text/javascript';
    playerApi.src = 'https://www.youtube.com/iframe_api';
    doc.body.appendChild(playerApi);

    this.createPlayer();
  }

  createPlayer(): void {
    let interval = setInterval(() => {
      if ((typeof _window.YT !== 'undefined') && _window.YT && _window.YT.Player) {
        this.yt_player = new _window.YT.Player('yt-player', {
          width: '440',
          height: '250',
          videoId: 'ZWJH7JQCjLM',
          playerVars: {
            iv_load_policy: '3',
            rel: '0'
          },
          events: {
            onStateChange: (ev) => {
              console.log(12);
            }
          }
        });
        console.log(this.yt_player);
        clearInterval(interval);
      }
    }, 100);
  }

  playVideo(): void {
    if (!this.yt_player) {
      return;
    }
    console.log(this.yt_player);
    // this.yt_player.loadVideoById('ZWJH7JQCjLM');
 
  }

  removeTab(): void {
    this.playlistService.removeUserFromList(this.playlist, this.userService.getCurrentUser().id).subscribe();
  }

  onDragover($event) {
  }
  onDrop($event) {
    if (this.playlistService.addVideoToLocallist(this.playlist , $event.data)) {
      this.playlistService.addVideoTolist(this.playlist);
    }

  }

  // savePlayer($event) {
  //   this.playlist = $event;
  // }

  // onStateChange($event) {

  // }

}
