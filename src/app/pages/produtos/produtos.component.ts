import { Component } from '@angular/core';
import { ProdutosService } from './produtos.service';
import { ItemLojaType } from 'src/types/itemLojaType';
import { ItemPedidoType, PedidoType } from 'src/types/pedidoType';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss'],
})
export class ProdutosComponent {
  public itensDaLoja: ItemLojaType[] = [];
  public carrinho: ItemPedidoType[] = [];

  constructor(private _service: ProdutosService) {}

  ngOnInit() {
    this.itensDaLoja = this._service.getItens();
  }

  public adicionarItemAoCarrinho(id: string): void {
    const produtoSelecionado = this._service.getItemBy(id);
    if (produtoSelecionado) {
      const indexProduto = this.carrinho.findIndex(
        (item) => item.productId === id
      );
      if (indexProduto > -1) {
        this.carrinho[indexProduto].quantity++;
      } else {
        const novoItemCarrinho: ItemPedidoType = {
          productId: produtoSelecionado.id,
          quantity: 1,
        };
        this.carrinho.push(novoItemCarrinho);
      }
    }
  }

  public removerItemCarrinho(id: string) {
    const indexProduto = this.carrinho.findIndex(
      (item) => item.productId === id
    );
    if(this.carrinho[indexProduto].quantity === 1) {
      this.carrinho.splice(indexProduto, 1);
    } else {
      this.carrinho[indexProduto].quantity--;
    }
  }
}
