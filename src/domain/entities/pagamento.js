// src/domain/entities/pagamento.js
class Pagamento {
    constructor(codigo, codAssinatura, valorPago, dataPagamento) {
      this.codigo = codigo;
      this.codAssinatura = codAssinatura;
      this.valorPago = valorPago;
      this.dataPagamento = dataPagamento;
    }
  }
  
  export default Pagamento;
  