import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaItemModule } from './components/lista-item/lista-item.module';
import { ProdutosComponent } from './produtos.component';
import { ProdutosService } from './produtos.service';
import { ProdutosRoutingModule } from './produtos-routing.module';
import { CarrinhoModule } from './carrinho/carrinho.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  exports: [ProdutosComponent],
  declarations: [ProdutosComponent],
  imports: [
    CommonModule,
    ListaItemModule,
    CarrinhoModule,
    ProdutosRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ProdutosService],
})
export class ProdutosModule {}
