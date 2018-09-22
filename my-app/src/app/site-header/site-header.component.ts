import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import {MatDialog} from '@angular/material';
import { JoinListPopupComponent } from '../join-list-popup/join-list-popup.component';

@Component({
  selector: 'app-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.scss']
})
export class SiteHeaderComponent implements OnInit {
  @Output() joinPlaylistClicked: EventEmitter<string> = new EventEmitter<string>();
  @Output() searchVideo: EventEmitter<string> = new EventEmitter<string>();
  searchVid$ = new Subject<string>();

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.searchVid$.pipe(debounceTime(300)
    ).subscribe((search: string) => {
      this.searchVideo.emit(search);
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(JoinListPopupComponent, {
      width: '300px',
    });

    dialogRef.afterClosed().subscribe(result => {
        if (result) {
        this.joinPlaylistClicked.emit(result);
     }
    });
  }

}
