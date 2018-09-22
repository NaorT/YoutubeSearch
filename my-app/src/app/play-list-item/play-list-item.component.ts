import { Component, OnInit, Output, Input } from '@angular/core';
import * as M from '../models';
import { PlaylistService } from '../playlist.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-play-list-item',
  templateUrl: './play-list-item.component.html',
  styleUrls: ['./play-list-item.component.scss']
})
export class PlayListItemComponent implements OnInit {
  @Input() playlist: M.Playlist;
  constructor(private playlistService: PlaylistService,
              private userService: UserService) { }

  ngOnInit() {
  }

  
  removeTab(): void {
    this.playlistService.removeUserFromList(this.playlist, this.userService.getCurrentUser().id).subscribe();
  }

}
