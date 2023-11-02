import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaItemModule } from './components/lista-item/lista-item.module';
import { ProdutosComponent } from './produtos.component';
import { ProdutosService } from './produtos.service';
import { ProdutosRoutingModule } from './produtos-routing.module';
import { CarrinhoComponent } from './carrinho/carrinho.component';

@NgModule({
  exports: [ProdutosComponent],
  declarations: [ProdutosComponent, CarrinhoComponent],
  imports: [CommonModule, ListaItemModule, ProdutosRoutingModule],
  providers: [ProdutosService],
})
export class ProdutosModule {}
