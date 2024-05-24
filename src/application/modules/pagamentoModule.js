// src/application/modules/pagamentoModule.js
import { Module } from '@nestjs/common';
import { PagamentoController } from '../../presentation/controllers/pagamentoController.js';
import PagamentoService from '../services/pagamentoService.js';
import PagamentoRepository from '../../infrastructure/repositories/pagamentoRepository.js';

@Module({
  controllers: [PagamentoController],
  providers: [
    PagamentoService,
    PagamentoRepository,
  ],
})
export class PagamentoModule {}
