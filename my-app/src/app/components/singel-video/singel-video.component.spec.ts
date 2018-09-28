import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingelVideoComponent } from './singel-video.component';

describe('SingelVideoComponent', () => {
  let component: SingelVideoComponent;
  let fixture: ComponentFixture<SingelVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingelVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingelVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
