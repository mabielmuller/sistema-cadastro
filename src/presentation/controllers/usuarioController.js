// src/presentation/controllers/usuarioController.js
import { Controller, Get, Post, Req, Param, Patch } from '@nestjs/common';
import UsuarioService from '../../application/services/usuarioService.js';

@Controller('servcad/usuarios')
export class UsuarioController {
  constructor(usuarioService) {
    this.usuarioService = usuarioService;
  }

  @Get()
  async getAll() {
    return await this.usuarioService.getAllUsuarios();
  }

  @Post()
  async create(@Req() request) {
    const { usuario, senha } = request.body;
    return await this.usuarioService.createUsuario(usuario, senha);
  }

  @Get(':usuario')
  async getByUsuario(@Param('usuario') usuario) {
    return await this.usuarioService.getUsuarioByUsuario(usuario);
  }

  @Patch(':usuario')
  async update(@Param('usuario') usuario, @Req() request) {
    const { senha } = request.body;
    return await this.usuarioService.updateUsuario(usuario, senha);
  }
}
