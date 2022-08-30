import { TestBed } from '@angular/core/testing';

import { UserMedicamentoService } from './user-medicamento.service';

describe('UserMedicamentoService', () => {
  let service: UserMedicamentoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserMedicamentoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
