import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NetService } from '../net/net.service';
@Injectable({
  providedIn: 'root'
})


export class YoutubeService {
  max_results = 10;

  public nextToken: string;
  public lastQuery: string;

  constructor(private net: NetService) { }

  public searchVideos(searchText: string): Observable<any> {
     return this.net.searchVideo(searchText);
  }
  public getTopFive(regionCode: string) {
    return this.net.getTopFive(regionCode);
  }

}


