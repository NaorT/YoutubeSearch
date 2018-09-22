import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoSerachResultsComponent } from './video-serach-results.component';

describe('VideoSerachResultsComponent', () => {
  let component: VideoSerachResultsComponent;
  let fixture: ComponentFixture<VideoSerachResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoSerachResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoSerachResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
