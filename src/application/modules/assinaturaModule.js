// src/application/modules/assinaturaModule.js
import { Module } from '@nestjs/common';
import { AssinaturaController } from '../../presentation/controllers/assinaturaController.js';
import AssinaturaService from '../services/assinaturaService.js';
import AssinaturaRepository from '../../infrastructure/repositories/assinaturaRepository.js';

@Module({
  controllers: [AssinaturaController],
  providers: [
    AssinaturaService,
    AssinaturaRepository,
  ],
})
export class AssinaturaModule {}
