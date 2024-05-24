// src/application/services/applicativoService.js
import Aplicativo from '../../domain/entities/applicativo.js';

class AplicativoService {
  constructor(aplicativoRepository) {
    this.aplicativoRepository = aplicativoRepository;
  }

  createAplicativo(codigo, nome, custoMensal) {
    const aplicativo = new Aplicativo(codigo, nome, custoMensal);
    this.aplicativoRepository.add(aplicativo);
    return aplicativo;
  }

  getAllAplicativos() {
    return this.aplicativoRepository.findAll();
  }

  getAplicativoById(codigo) {
    return this.aplicativoRepository.findById(codigo);
  }

  updateAplicativo(codigo, nome, custoMensal) {
    const aplicativo = new Aplicativo(codigo, nome, custoMensal);
    this.aplicativoRepository.update(codigo, aplicativo);
    return aplicativo;
  }
}

export default AplicativoService;
