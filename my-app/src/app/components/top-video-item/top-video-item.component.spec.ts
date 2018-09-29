import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopVideoItemComponent } from './top-video-item.component';

describe('TopVideoItemComponent', () => {
  let component: TopVideoItemComponent;
  let fixture: ComponentFixture<TopVideoItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopVideoItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopVideoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
