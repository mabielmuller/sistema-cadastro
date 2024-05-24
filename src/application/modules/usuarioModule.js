// src/application/modules/usuarioModule.js
import { Module } from '@nestjs/common';
import { UsuarioController } from '../../presentation/controllers/usuarioController.js';
import UsuarioService from '../services/usuarioService.js';
import UsuarioRepository from '../../infrastructure/repositories/usuarioRepository.js';

@Module({
  controllers: [UsuarioController],
  providers: [
    UsuarioService,
    UsuarioRepository,
  ],
})
export class UsuarioModule {}
