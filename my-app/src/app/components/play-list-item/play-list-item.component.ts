import { Component, OnInit, Output, Input, EventEmitter, OnDestroy } from '@angular/core';
import * as M from '../../models';
import { PlaylistService } from '../../services/playlist/playlist.service';
import { UserService } from '../../services/user/user.service';
import { DragAndDropService } from '../../services/drag-and-drop/drag-and-drop.service';
import { DragulaService } from 'ng2-dragula';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

const _window: any = window;

@Component({
  selector: 'app-play-list-item',
  templateUrl: './play-list-item.component.html',
  styleUrls: ['./play-list-item.component.scss']
})
export class PlayListItemComponent implements OnInit, OnDestroy {
  @Input() playlist: M.Playlist;
  @Output() videoClicked: EventEmitter<M.YoutubeSearchResult> = new EventEmitter<M.YoutubeSearchResult>();
  subs = new Subscription();

  constructor(private playlistService: PlaylistService,
              private userService: UserService,
              private dragAndDropService: DragAndDropService,
              private dragulaService: DragulaService) {}

  ngOnInit() {
    this.subs.add(this.dragulaService.drop('VIDEOS')
    .subscribe(({ name, el, target, source, sibling }) => {
      this.playlistService.addVideoTolist(this.playlist);

    })
  );
  }
  ngOnDestroy() {
    this.subs.unsubscribe();
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

  playVideo(video) {
    this.playlistService.setCurrentList(this.playlist);
    this.playlistService.setVideoPlayed(video);
  }

  deleteVideo(video) {
    const videoPosition = this.playlist.videos.indexOf(video);
    this.playlist.videos.splice(videoPosition, 1);
    this.playlistService.addVideoTolist(this.playlist);
    this.playlistService.setCurrentList(this.playlist);

  }
  checkIfAutoPlay() {
    return this.playlistService.getAutoplay();
  }
  toggleChange() {
    this.playlistService.toggleChange();
  }


}
