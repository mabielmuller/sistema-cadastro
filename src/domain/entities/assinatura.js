// src/domain/entities/assinatura.js
class Assinatura {
    constructor(codigo, codApp, codCli, inicioVigencia, fimVigencia) {
      this.codigo = codigo;
      this.codApp = codApp;
      this.codCli = codCli;
      this.inicioVigencia = inicioVigencia;
      this.fimVigencia = fimVigencia;
    }
  }
  
  export default Assinatura;
  