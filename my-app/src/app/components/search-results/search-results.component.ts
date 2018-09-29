import { Component, OnInit, Input } from '@angular/core';
import * as M from '../../models';

@Component({
  selector:  'app-search-results',
  templateUrl:  './search-results.component.html',
  styleUrls:  ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  @Input() searchResults:  M.YoutubeSearchResult[];


  constructor() { }

  ngOnInit() {
  }


}
