import { Component, OnInit, Output, Input, ChangeDetectionStrategy } from '@angular/core';
import * as M from '../../models';
import { PlaylistService } from '../../services/playlist/playlist.service';
import { UserService } from '../../services/user/user.service';
import { DragAndDropService } from '../../services/drag-and-drop/drag-and-drop.service';
@Component({
  selector: 'app-play-list-item',
  templateUrl: './play-list-item.component.html',
  styleUrls: ['./play-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayListItemComponent implements OnInit {
  @Input() playlist: M.Playlist;
  player: YT.Player;

  constructor(private playlistService: PlaylistService,
              private userService: UserService,
              private dragAndDropService: DragAndDropService) { }

  ngOnInit() {

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

  savePlayer($event) {
    this.playlist = $event;
  }

  onStateChange($event) {

  }

}
