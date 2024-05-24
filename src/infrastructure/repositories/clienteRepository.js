// src/infrastructure/repositories/clienteRepository.js
import Cliente from '../../domain/entities/cliente.js';

class ClienteRepository {
  constructor() {
    this.clientes = [];
  }

  add(cliente) {
    this.clientes.push(cliente);
  }

  findAll() {
    return this.clientes;
  }

  findById(codigo) {
    return this.clientes.find(cli => cli.codigo === codigo);
  }

  update(codigo, updatedCliente) {
    const index = this.clientes.findIndex(cli => cli.codigo === codigo);
    if (index !== -1) {
      this.clientes[index] = updatedCliente;
    }
  }
}

export default ClienteRepository;
