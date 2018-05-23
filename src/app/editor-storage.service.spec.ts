import { TestBed, inject } from '@angular/core/testing';

import { EditorStorageService } from './editor-storage.service';

describe('EditorStorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditorStorageService]
    });
  });

  it('should be created', inject([EditorStorageService], (service: EditorStorageService) => {
    expect(service).toBeTruthy();
  }));
});
