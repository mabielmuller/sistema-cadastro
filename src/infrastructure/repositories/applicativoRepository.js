// src/infrastructure/repositories/applicativoRepository.js
import Aplicativo from '../../domain/entities/applicativo.js';

class AplicativoRepository {
  constructor() {
    this.aplicativos = [];
  }

  add(aplicativo) {
    this.aplicativos.push(aplicativo);
  }

  findAll() {
    return this.aplicativos;
  }

  findById(codigo) {
    return this.aplicativos.find(app => app.codigo === codigo);
  }

  update(codigo, updatedApp) {
    const index = this.aplicativos.findIndex(app => app.codigo === codigo);
    if (index !== -1) {
      this.aplicativos[index] = updatedApp;
    }
  }
}

export default AplicativoRepository;
