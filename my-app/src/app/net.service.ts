import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NetService {
  constructor(private http: HttpClient) {}

  searchVideo(url): Observable<any> {
    return this.http.get(url);
  }
}
