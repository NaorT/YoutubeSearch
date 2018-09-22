import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayListItemComponent } from './play-list-item.component';

describe('PlayListItemComponent', () => {
  let component: PlayListItemComponent;
  let fixture: ComponentFixture<PlayListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
