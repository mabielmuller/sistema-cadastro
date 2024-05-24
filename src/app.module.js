import { Module } from '@nestjs/common';
import { AplicativoModule } from './application/modules/applicativoModule.js';
import { ClienteModule } from './application/modules/clienteModule.js';
import { AssinaturaModule } from './application/modules/assinaturaModule.js';
import { PagamentoModule } from './application/modules/pagamentoModule.js';
import { UsuarioModule } from './application/modules/usuarioModule.js';

@Module({
  imports: [AplicativoModule, ClienteModule, AssinaturaModule, PagamentoModule, UsuarioModule],
})
export class AppModule {}
