import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplorePlaylistsComponent } from './explore-playlists.component';

describe('ExplorePlaylistsComponent', () => {
  let component: ExplorePlaylistsComponent;
  let fixture: ComponentFixture<ExplorePlaylistsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExplorePlaylistsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExplorePlaylistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
