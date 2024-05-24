// src/infrastructure/repositories/usuarioRepository.js
import Usuario from '../../domain/entities/usuario.js';

class UsuarioRepository {
  constructor() {
    this.usuarios = [];
  }

  add(usuario) {
    this.usuarios.push(usuario);
  }

  findAll() {
    return this.usuarios;
  }

  findByUsuario(usuario) {
    return this.usuarios.find(user => user.usuario === usuario);
  }

  update(usuario, updatedUsuario) {
    const index = this.usuarios.findIndex(user => user.usuario === usuario);
    if (index !== -1) {
      this.usuarios[index] = updatedUsuario;
    }
  }
}

export default UsuarioRepository;
