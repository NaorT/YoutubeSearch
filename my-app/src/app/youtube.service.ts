import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NetService } from './net.service';
const YOUTUBE_API_KEY = 'AIzaSyCR7EMEacL2ANiIrax7ZoGNNyjZJ-L7Qvg';
@Injectable({
  providedIn: 'root'
})

export class YoutubeService {
  base_url = 'https://www.googleapis.com/youtube/v3/';
  max_results = 10;

  public nextToken: string;
  public lastQuery: string;

  constructor(private net: NetService) { }

  public searchVideos(searchText: string): Observable<any> {
    return new Observable((o) => {
      const url = `${this.base_url}search?q=${searchText}&maxResults=${this.max_results}&type=video&part=snippet,id&key=${YOUTUBE_API_KEY}&videoEmbeddable=true`; // tslint:disable-line
      this.net.searchVideo(url)
      .map(response => {
        const res = response['items'];
        this.lastQuery = searchText;
        this.nextToken = res['nextPageToken'] ? res['nextPageToken'] : undefined;

        const ids = [];
        res.forEach((item) => {
          ids.push(item.id.videoId);
        });
        return this.getVideos(ids);
        })
      .subscribe((res) => {
        res.subscribe(vid => {
        o.next(vid);
        o.complete();
        });
              });
    });
  }

  getVideos(ids): Observable<any> {
    const url = `${this.base_url}videos?id=${ids.join(',')}
    &maxResults=${this.max_results}&type=video&part=snippet,contentDetails,statistics&key=${YOUTUBE_API_KEY}`;
    return this.net.searchVideo(url)
      .map(results => {
        return results['items'];
      });
  }

}


