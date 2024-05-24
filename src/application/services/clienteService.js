// src/application/services/clienteService.js
import Cliente from '../../domain/entities/cliente.js';

class ClienteService {
  constructor(clienteRepository) {
    this.clienteRepository = clienteRepository;
  }

  createCliente(codigo, nome, email) {
    const cliente = new Cliente(codigo, nome, email);
    this.clienteRepository.add(cliente);
    return cliente;
  }

  getAllClientes() {
    return this.clienteRepository.findAll();
  }

  getClienteById(codigo) {
    return this.clienteRepository.findById(codigo);
  }

  updateCliente(codigo, nome, email) {
    const cliente = new Cliente(codigo, nome, email);
    this.clienteRepository.update(codigo, cliente);
    return cliente;
  }
}

export default ClienteService;
