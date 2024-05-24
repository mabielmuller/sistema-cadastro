// src/application/services/assinaturaService.js
import Assinatura from '../../domain/entities/assinatura.js';

class AssinaturaService {
  constructor(assinaturaRepository) {
    this.assinaturaRepository = assinaturaRepository;
  }

  createAssinatura(codigo, codApp, codCli, inicioVigencia, fimVigencia) {
    const assinatura = new Assinatura(codigo, codApp, codCli, inicioVigencia, fimVigencia);
    this.assinaturaRepository.add(assinatura);
    return assinatura;
  }

  getAllAssinaturas() {
    return this.assinaturaRepository.findAll();
  }

  getAssinaturaById(codigo) {
    return this.assinaturaRepository.findById(codigo);
  }

  updateAssinatura(codigo, codApp, codCli, inicioVigencia, fimVigencia) {
    const assinatura = new Assinatura(codigo, codApp, codCli, inicioVigencia, fimVigencia);
    this.assinaturaRepository.update(codigo, assinatura);
    return assinatura;
  }
}

export default AssinaturaService;
