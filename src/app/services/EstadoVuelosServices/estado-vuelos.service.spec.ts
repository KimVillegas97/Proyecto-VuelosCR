import { TestBed } from '@angular/core/testing';

import { EstadoVuelosService } from './estado-vuelos.service';

describe('EstadoVuelosService', () => {
  let service: EstadoVuelosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstadoVuelosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
