// src/application/modules/clienteModule.js
import { Module } from '@nestjs/common';
import { ClienteController } from '../../presentation/controllers/clienteController.js';
import ClienteService from '../services/clienteService.js';
import ClienteRepository from '../../infrastructure/repositories/clienteRepository.js';

@Module({
  controllers: [ClienteController],
  providers: [
    ClienteService,
    ClienteRepository,
  ],
})
export class ClienteModule {}
