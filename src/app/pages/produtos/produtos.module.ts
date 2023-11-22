import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaItemModule } from './components/lista-item/lista-item.module';
import { ProdutosComponent } from './produtos.component';
import { ProdutosService } from './produtos.service';
import { ProdutosRoutingModule } from './produtos-routing.module';
import { CarrinhoModule } from './carrinho/carrinho.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@NgModule({
  exports: [ProdutosComponent],
  declarations: [ProdutosComponent, HeaderComponent],
  imports: [
    CommonModule,
    ListaItemModule,
    CarrinhoModule,
    ProdutosRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ProgressSpinnerModule,
  ],
  providers: [ProdutosService],
})
export class ProdutosModule {}
