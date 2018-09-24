import { TestBed, inject } from '@angular/core/testing';

import { FirebaseHandlerService } from './firebase-handler.service';

describe('FirebaseHandlerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FirebaseHandlerService]
    });
  });

  it('should be created', inject([FirebaseHandlerService], (service: FirebaseHandlerService) => {
    expect(service).toBeTruthy();
  }));
});
