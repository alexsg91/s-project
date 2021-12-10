import { TestBed } from '@angular/core/testing';

import { RemoteCallsManagerService } from './remote-calls-manager.service';

describe('RemoteCallsManagerService', () => {
  let service: RemoteCallsManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RemoteCallsManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
