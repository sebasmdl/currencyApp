import { TestBed } from '@angular/core/testing';

import { EditPermissionsService } from './edit-permissions.service';

describe('EditPermissionsService', () => {
  let service: EditPermissionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditPermissionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
