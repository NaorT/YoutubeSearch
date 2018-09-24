import { Injectable } from '@angular/core';
import * as Rx from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DragAndDropService {
  private activeDragFromSearchResult = new Rx.Subject();

  constructor() { }

  startDragFromSearchResult() {
    this.activeDragFromSearchResult.next(true);
  }
  endDragFromSearchResult() {
    this.activeDragFromSearchResult.next(false);
  }
  subscribeToDragFromSearchResult() {
    return this.activeDragFromSearchResult;
  }

}
