import { TestBed } from '@angular/core/testing';

import { Jogador } from './jogador.service';

describe('JogadorService', () => {
  let service: Jogador;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Jogador);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
