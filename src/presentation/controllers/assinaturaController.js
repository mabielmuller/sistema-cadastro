// src/presentation/controllers/assinaturaController.js
import { Controller, Get, Post, Req, Param, Patch } from '@nestjs/common';
import AssinaturaService from '../../application/services/assinaturaService.js';

@Controller('servcad/assinaturas')
export class AssinaturaController {
  constructor(assinaturaService) {
    this.assinaturaService = assinaturaService;
  }

  @Get()
  async getAll() {
    return await this.assinaturaService.getAllAssinaturas();
  }

  @Post()
  async create(@Req() request) {
    const { codigo, codApp, codCli, inicioVigencia, fimVigencia } = request.body;
    return await this.assinaturaService.createAssinatura(codigo, codApp, codCli, inicioVigencia, fimVigencia);
  }

  @Get(':id')
  async getById(@Param('id') id) {
    return await this.assinaturaService.getAssinaturaById(id);
  }

  @Patch(':id')
  async update(@Param('id') id, @Req() request) {
    const { codApp, codCli, inicioVigencia, fimVigencia } = request.body;
    return await this.assinaturaService.updateAssinatura(id, codApp, codCli, inicioVigencia, fimVigencia);
  }
}
