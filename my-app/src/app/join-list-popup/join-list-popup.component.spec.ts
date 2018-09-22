import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinListPopupComponent } from './join-list-popup.component';

describe('JoinListPopupComponent', () => {
  let component: JoinListPopupComponent;
  let fixture: ComponentFixture<JoinListPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinListPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinListPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
