import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
const YOUTUBE_API_KEY = 'AIzaSyCR7EMEacL2ANiIrax7ZoGNNyjZJ-L7Qvg';

@Injectable({
  providedIn: 'root'
})
export class NetService {
  youtube_base_url = 'https://www.googleapis.com/youtube/v3/';

  constructor(private http: HttpClient) {}

  searchVideo(searchText): Observable<any> {
    const url = `${this.youtube_base_url}search?q=${searchText}
    &maxResults=${10}&type=video&part=snippet,id&key=${YOUTUBE_API_KEY}&videoEmbeddable=true`;
    return this.http.get(url);
  }
}
