import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { DragScrollModule } from 'ngx-drag-scroll';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SiteHeaderComponent } from './site-header/site-header.component';
import { PlayListsComponent } from './play-lists/play-lists.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatStepperModule } from '@angular/material';
import { MatRadioModule } from '@angular/material';
import { MatCardModule } from '@angular/material';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { VideoSerachResultsComponent } from './video-serach-results/video-serach-results.component';
import { JoinListPopupComponent } from './join-list-popup/join-list-popup.component';


import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FlipModule } from 'ngx-Flip';


import { AddListTabComponent } from './add-list-tab/add-list-tab.component';
import { AppContainerComponent } from './app-container/app-container.component';
import { YoutubePlayerModule } from 'ngx-youtube-player';
import { PlayListItemComponent } from './play-list-item/play-list-item.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchResultsComponent } from './search-results/search-results.component';
import { SearchResultsItemComponent } from './search-results-item/search-results-item.component';
import {MatMenuModule} from '@angular/material/menu';
import { DndModule } from 'ngx-drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    SiteHeaderComponent,
    PlayListsComponent,
    VideoSerachResultsComponent,
    JoinListPopupComponent,
    AddListTabComponent,
    AppContainerComponent,
    PlayListItemComponent,
    SearchResultsComponent,
    SearchResultsItemComponent
  ],
  imports: [
    YoutubePlayerModule,

    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule,
    HttpClientModule,
    DragScrollModule,
    FlipModule,
    DndModule,

    // angular matireal
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatStepperModule,
    MatRadioModule,
    MatCardModule,
    MatMenuModule,
  ],
  entryComponents: [
    JoinListPopupComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
