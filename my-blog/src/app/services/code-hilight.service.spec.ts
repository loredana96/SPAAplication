import { TestBed } from '@angular/core/testing';

import { CodeHilightService } from './code-hilight.service';

describe('CodeHilightService', () => {
  let service: CodeHilightService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CodeHilightService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
