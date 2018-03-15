import { TestBed, inject } from '@angular/core/testing';

import { AppdetailsService } from './appdetails.service';

describe('AppdetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppdetailsService]
    });
  });

  it('should be created', inject([AppdetailsService], (service: AppdetailsService) => {
    expect(service).toBeTruthy();
  }));
});
