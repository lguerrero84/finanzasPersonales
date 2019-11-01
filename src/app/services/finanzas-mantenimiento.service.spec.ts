import { TestBed } from '@angular/core/testing';

import { FinanzasMantenimientoService } from './finanzas-mantenimiento.service';

describe('FinanzasMantenimientoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FinanzasMantenimientoService = TestBed.get(FinanzasMantenimientoService);
    expect(service).toBeTruthy();
  });
});
