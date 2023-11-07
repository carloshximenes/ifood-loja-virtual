import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaItemModule } from './components/lista-item/lista-item.module';
import { ProdutosComponent } from './produtos.component';
import { ProdutosService } from './produtos.service';
import { ProdutosRoutingModule } from './produtos-routing.module';
import { CarrinhoModule } from './carrinho/carrinho.module';

@NgModule({
  exports: [ProdutosComponent],
  declarations: [ProdutosComponent],
  imports: [
    CommonModule,
    ListaItemModule,
    CarrinhoModule,
    ProdutosRoutingModule,
  ],
  providers: [ProdutosService],
})
export class ProdutosModule {}
