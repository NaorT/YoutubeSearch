import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplorePlaylistItemComponent } from './explore-playlist-item.component';

describe('ExplorePlaylistItemComponent', () => {
  let component: ExplorePlaylistItemComponent;
  let fixture: ComponentFixture<ExplorePlaylistItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExplorePlaylistItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExplorePlaylistItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
