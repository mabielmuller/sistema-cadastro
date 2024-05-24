// src/presentation/controllers/applicativoController.js
import { Controller, Get, Post, Req, Param, Patch } from '@nestjs/common';
import AplicativoService from '../../application/services/applicativoService.js';

@Controller('servcad/aplicativos')
export class AplicativoController {
  constructor(aplicativoService) {
    this.aplicativoService = aplicativoService;
  }

  @Get()
  async getAll() {
    return await this.aplicativoService.getAllAplicativos();
  }

  @Post()
  async create(@Req() request) {
    const { codigo, nome, custoMensal } = request.body;
    return await this.aplicativoService.createAplicativo(codigo, nome, custoMensal);
  }

  @Get(':id')
  async getById(@Param('id') id) {
    return await this.aplicativoService.getAplicativoById(id);
  }

  @Patch(':id')
  async update(@Param('id') id, @Req() request) {
    const { nome, custoMensal } = request.body;
    return await this.aplicativoService.updateAplicativo(id, nome, custoMensal);
  }
}
