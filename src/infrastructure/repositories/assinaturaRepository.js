// src/infrastructure/repositories/assinaturaRepository.js
import Assinatura from '../../domain/entities/assinatura.js';

class AssinaturaRepository {
  constructor() {
    this.assinaturas = [];
  }

  add(assinatura) {
    this.assinaturas.push(assinatura);
  }

  findAll() {
    return this.assinaturas;
  }

  findById(codigo) {
    return this.assinaturas.find(ass => ass.codigo === codigo);
  }

  update(codigo, updatedAssinatura) {
    const index = this.assinaturas.findIndex(ass => ass.codigo === codigo);
    if (index !== -1) {
      this.assinaturas[index] = updatedAssinatura;
    }
  }
}

export default AssinaturaRepository;
