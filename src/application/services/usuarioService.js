// src/application/services/usuarioService.js
import Usuario from '../../domain/entities/usuario.js';

class UsuarioService {
  constructor(usuarioRepository) {
    this.usuarioRepository = usuarioRepository;
  }

  createUsuario(usuario, senha) {
    const user = new Usuario(usuario, senha);
    this.usuarioRepository.add(user);
    return user;
  }

  getAllUsuarios() {
    return this.usuarioRepository.findAll();
  }

  getUsuarioByUsuario(usuario) {
    return this.usuarioRepository.findByUsuario(usuario);
  }

  updateUsuario(usuario, senha) {
    const user = new Usuario(usuario, senha);
    this.usuarioRepository.update(usuario, user);
    return user;
  }
}

export default UsuarioService;
