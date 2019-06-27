import { TestBed } from '@angular/core/testing';

import { GetLabelsService } from './get-labels.service';

describe('GetLabelsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetLabelsService = TestBed.get(GetLabelsService);
    expect(service).toBeTruthy();
  });
});
