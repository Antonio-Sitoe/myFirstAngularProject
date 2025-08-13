import { TestBed } from '@angular/core/testing';

import { Enviaformulario } from './enviaformulario';

describe('Enviaformulario', () => {
  let service: Enviaformulario;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Enviaformulario);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
