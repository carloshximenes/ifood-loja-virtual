import { Component } from '@angular/core';
import { ProdutosService } from './produtos.service';
import { ItemLojaType } from 'src/types/itemLojaType';
import { ItemPedidoType, PedidoType } from 'src/types/pedidoType';
import { Subscription, take } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SearchParamsType } from 'src/types/searchParams.type';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss'],
})
export class ProdutosComponent {
  public itensDaLoja: ItemLojaType[] = [];
  public carrinho: ItemPedidoType[] = [];
  public searchForm!: FormGroup;

  // public itensDaLojaSubscription!: Subscription;

  constructor(private _service: ProdutosService, private _fb: FormBuilder) {}

  ngOnInit() {
    //   this.itensDaLojaSubscription = this._service.getItens().subscribe({
    //     next: (result: ItemLojaType[]) => {
    //       this.itensDaLoja = result;
    //     },
    //     error: () => {},
    //     complete: () => {}
    //   });
    // }

    // if(localStorage.getItem('usuarioLogado')) {
      this.formInit();
      this.atualizarLista();
    // } else {
      // window.history.back();
    // }

  }

  public formInit(): void {
    this.searchForm = this._fb.group({
      search: [null],
    });
  }

  public atualizarLista(searchParams?: SearchParamsType): void {
    this._service
      .getItens(searchParams)
      .pipe(take(1))
      .subscribe({
        next: (result: ItemLojaType[]) => {
          this.itensDaLoja = result;
        },
        error: () => {},
        complete: () => {},
      });
  }

  // ngOnDestroy() {
  //   if(this.itensDaLojaSubscription) {
  //     this.itensDaLojaSubscription.unsubscribe();
  //   }
  // }

  public adicionarItemAoCarrinho(id: string): void {
    const indexProduto = this.carrinho.findIndex(
      (item) => item.productId === id
    );
    if (indexProduto > -1) {
      this.carrinho[indexProduto].quantity++;
    } else {
      const novoItemCarrinho: ItemPedidoType = {
        productId: id,
        quantity: 1,
      };
      this.carrinho.push(novoItemCarrinho);
    }
  }

  public removerItemCarrinho(id: string) {
    const indexProduto = this.carrinho.findIndex(
      (item) => item.productId === id
    );
    if (this.carrinho[indexProduto].quantity === 1) {
      this.carrinho.splice(indexProduto, 1);
    } else {
      this.carrinho[indexProduto].quantity--;
    }
  }

  public buscarItemFiltrados(): void {
    const { search } = this.searchForm.value;
    const searchParams: SearchParamsType = { search };
    this.atualizarLista(searchParams);
  }

  public verDetalhesItem(id: string): void {
    this._service
      .getItemBy(id)
      .pipe(take(1))
      .subscribe({
        next: (result) => {
          console.log(result);
        },
      });
  }
}
