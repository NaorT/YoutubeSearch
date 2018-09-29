import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { DragScrollModule } from 'ngx-drag-scroll';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SiteHeaderComponent } from './components/site-header/site-header.component';
import { PlayListsComponent } from './components/play-lists/play-lists.component';
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
import { MatListModule } from '@angular/material';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { VideoSerachResultsComponent } from './components/video-serach-results/video-serach-results.component';
import { JoinListPopupComponent } from './components/join-list-popup/join-list-popup.component';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FlipModule } from 'ngx-Flip';


import { AddListTabComponent } from './components/add-list-tab/add-list-tab.component';
import { AppContainerComponent } from './views/app-container/app-container.component';
import { PlayListItemComponent } from './components/play-list-item/play-list-item.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { SearchResultsItemComponent } from './components/search-results-item/search-results-item.component';
import {MatMenuModule} from '@angular/material/menu';
import { DndModule } from 'ngx-drag-drop';
import { NgxY2PlayerModule } from 'ngx-y2-player';
import { SingelVideoComponent } from './components/singel-video/singel-video.component';
import { DragulaModule } from 'ng2-dragula';
import { TopVideosComponent } from './components/top-videos/top-videos.component';
import { TopVideoItemComponent } from './components/top-video-item/top-video-item.component';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';

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
    SearchResultsItemComponent,
    SingelVideoComponent,
    TopVideosComponent,
    TopVideoItemComponent
  ],
  imports: [
    CommonModule,
    ToastrModule.forRoot(),
    NgxY2PlayerModule,
    DragulaModule.forRoot(),
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
    MatListModule,
    MatSlideToggleModule,
  ],
  entryComponents: [
    JoinListPopupComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
