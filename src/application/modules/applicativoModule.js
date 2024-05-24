// src/application/modules/applicativoModule.js
import { Module } from '@nestjs/common';
import { AplicativoController } from '../../presentation/controllers/applicativoController.js';
import AplicativoService from '../services/applicativoService.js';
import AplicativoRepository from '../../infrastructure/repositories/applicativoRepository.js';

@Module({
  controllers: [AplicativoController],
  providers: [
    AplicativoService,
    AplicativoRepository,
  ],
})
export class AplicativoModule {}
