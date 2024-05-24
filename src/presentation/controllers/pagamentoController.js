// src/presentation/controllers/pagamentoController.js
import { Controller, Post, Req } from '@nestjs/common';
import PagamentoService from '../../application/services/pagamentoService.js';

@Controller('servpag/pagamentos')
export class PagamentoController {
  constructor(pagamentoService) {
    this.pagamentoService = pagamentoService;
  }

  @Post()
  async create(@Req() request) {
    const { codigo, codAssinatura, valorPago, dataPagamento } = request.body;
    return await this.pagamentoService.createPagamento(codigo, codAssinatura, valorPago, dataPagamento);
  }
}
