// src/application/services/pagamentoService.js
import Pagamento from '../../domain/entities/pagamento.js';

class PagamentoService {
  constructor(pagamentoRepository) {
    this.pagamentoRepository = pagamentoRepository;
  }

  createPagamento(codigo, codAssinatura, valorPago, dataPagamento) {
    const pagamento = new Pagamento(codigo, codAssinatura, valorPago, dataPagamento);
    this.pagamentoRepository.add(pagamento);
    return pagamento;
  }

  getAllPagamentos() {
    return this.pagamentoRepository.findAll();
  }

  getPagamentoById(codigo) {
    return this.pagamentoRepository.findById(codigo);
  }

  updatePagamento(codigo, codAssinatura, valorPago, dataPagamento) {
    const pagamento = new Pagamento(codigo, codAssinatura, valorPago, dataPagamento);
    this.pagamentoRepository.update(codigo, pagamento);
    return pagamento;
  }
}

export default PagamentoService;
