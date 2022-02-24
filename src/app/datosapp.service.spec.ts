import { TestBed } from '@angular/core/testing';

import { DatosappService } from './datosapp.service';

describe('DatosappService', () => {
  let service: DatosappService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatosappService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
