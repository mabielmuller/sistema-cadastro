// src/presentation/controllers/clienteController.js
import { Controller, Get, Post, Req, Param, Patch } from '@nestjs/common';
import ClienteService from '../../application/services/clienteService.js';

@Controller('servcad/clientes')
export class ClienteController {
  constructor(clienteService) {
    this.clienteService = clienteService;
  }

  @Get()
  async getAll() {
    return await this.clienteService.getAllClientes();
  }

  @Post()
  async create(@Req() request) {
    const { codigo, nome, email } = request.body;
    return await this.clienteService.createCliente(codigo, nome, email);
  }

  @Get(':id')
  async getById(@Param('id') id) {
    return await this.clienteService.getClienteById(id);
  }

  @Patch(':id')
  async update(@Param('id') id, @Req() request) {
    const { nome, email } = request.body;
    return await this.clienteService.updateCliente(id, nome, email);
  }
}
