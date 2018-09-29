import { Component, OnInit, Input } from '@angular/core';
import { PlaylistService } from '../../services/playlist/playlist.service';
import { YoutubeService } from '../../services/youtube/youtube.service';
import * as M from '../../models';

@Component({
  selector: 'app-top-videos',
  templateUrl: './top-videos.component.html',
  styleUrls: ['./top-videos.component.scss']
})
export class TopVideosComponent implements OnInit {
  @Input() regionCode: string;

  videos: M.YoutubeSearchResult;
  country: string;
  constructor(
    private youtubeService: YoutubeService,
    private playlistService: PlaylistService
  ) { }

  ngOnInit() {
    this.country = this.getCountry();
    this.youtubeService.getTopFive(this.regionCode).subscribe((videos: M.YoutubeSearchResult) => {
      this.videos = videos;
    });
  }

  getCountry(): string {
    switch (this.regionCode.toLocaleUpperCase()) {
      case 'US' : return 'UNITED STATES';
      case 'IL' : return 'ISRAEL';
      case 'GB' : return 'UNITED KINGDOM';
    }
  }

}
