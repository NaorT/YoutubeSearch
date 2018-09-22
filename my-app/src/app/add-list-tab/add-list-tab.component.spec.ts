import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddListTabComponent } from './add-list-tab.component';

describe('AddListTabComponent', () => {
  let component: AddListTabComponent;
  let fixture: ComponentFixture<AddListTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddListTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddListTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
