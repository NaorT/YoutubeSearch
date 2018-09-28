import { Component, OnInit, Input } from '@angular/core';
import * as M from '../../models';
import { UserService } from '../../services/user/user.service';
import { PlaylistService } from '../../services/playlist/playlist.service';
import { Observable } from 'rxjs';
import { DragAndDropService } from '../../services/drag-and-drop/drag-and-drop.service';

@Component({
  selector: 'app-search-results-item',
  templateUrl: './search-results-item.component.html',
  styleUrls: ['./search-results-item.component.scss']
})
export class SearchResultsItemComponent implements OnInit {
  @Input() video: M.YoutubeSearchResult;
  @Input() dragable = false;
  player: YT.Player;
  playlists: Observable<M.Playlist[]>;
  cardFliped: any = false;
  flipDiv = false;
  draggable = {
    // note that data is handled with JSON.stringify/JSON.parse
    // only set simple data or POJO's as methods will be lost 
    data: this.video ,
    effectAllowed:  'linkMove',
    disable:  false,
    handle:  false
  };


  constructor(private playlistService: PlaylistService,
              private userService: UserService,
              private dragAndDropService: DragAndDropService) { }
  ngOnInit() {
    this.draggable.data = this.video;
    this.draggable.disable = this.dragable;
    this.getPlaylist();
  }

  private getPlaylist(): void {
    this.playlists = this.playlistService.getItemObserver(
      M.CollectionName.playlist,
      this.userService.getCurrentUser().id
    );
  }
  addToList(list: M.Playlist) {
    if (this.playlistService.addVideoToLocallist(list , this.video)) {
    this.playlistService.addVideoTolist(list);
    }
  }

  flipCard() {
    this.flipDiv = true;
    setTimeout(() => {
    this.flipDiv = false;
    }, 3500);
  }


}
