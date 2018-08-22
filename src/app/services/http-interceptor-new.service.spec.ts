import { TestBed, inject } from '@angular/core/testing';

import { HttpInterceptorNewService } from './http-interceptor-new.service';

describe('HttpInterceptorNewService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpInterceptorNewService]
    });
  });

  it('should be created', inject([HttpInterceptorNewService], (service: HttpInterceptorNewService) => {
    expect(service).toBeTruthy();
  }));
});
