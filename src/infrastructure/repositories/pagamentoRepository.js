// src/infrastructure/repositories/pagamentoRepository.js
import Pagamento from '../../domain/entities/pagamento.js';

class PagamentoRepository {
  constructor() {
    this.pagamentos = [];
  }

  add(pagamento) {
    this.pagamentos.push(pagamento);
  }

  findAll() {
    return this.pagamentos;
  }

  findById(codigo) {
    return this.pagamentos.find(pag => pag.codigo === codigo);
  }

  update(codigo, updatedPagamento) {
    const index = this.pagamentos.findIndex(pag => pag.codigo === codigo);
    if (index !== -1) {
      this.pagamentos[index] = updatedPagamento;
    }
  }
}

export default PagamentoRepository;
