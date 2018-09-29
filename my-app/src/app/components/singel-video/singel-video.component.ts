import { Component, OnInit, Input, ViewChild } from '@angular/core';
import * as M from '../../models';
import { NgxY2PlayerComponent, NgxY2PlayerOptions } from 'ngx-y2-player';
import { PlaylistService } from '../../services/playlist/playlist.service';

@Component({
  selector: 'app-singel-video',
  templateUrl: './singel-video.component.html',
  styleUrls: ['./singel-video.component.scss']
})
export class SingelVideoComponent implements OnInit {
  currentVideo: M.YoutubeSearchResult;
  @ViewChild('video') video: NgxY2PlayerComponent;
  playerOptions: NgxY2PlayerOptions;

  constructor(private playlistService: PlaylistService) {}
  ngOnInit() {
    this.playlistService.subscribeToPlayVideo().subscribe((video: M.YoutubeSearchResult) => {
      if (!video) {
        this.currentVideo = video;
        return;
      }
      if (this.currentVideo && this.currentVideo.id === video.id) {
        return;
      }
        this.setVideo(video);
    });
  }


  setVideo(video: M.YoutubeSearchResult) {
    this.currentVideo = undefined;
    setTimeout(() => {
      this.currentVideo = video;
      this.init();
    } );
  }

  init() {
    this.playerOptions = {
      videoId: this.currentVideo.id.videoId,
      height: 200,
      width: 300,
      resizeDebounceTime: 0,
      playerVars: {
        autoplay: 1,
      },
      // aspectRatio: (3 / 4), // you can set ratio of aspect ratio to auto resize with
    };
  }

  onStateChange(event) {
    if (event.data === 0 ) {
     this.playlistService.getNextVideo(this.currentVideo);
    }
  }


}
