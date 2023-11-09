import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ItemPedidoType, PedidoType } from 'src/types/pedidoType';
import { ProdutosService } from '../produtos.service';
import { ItemLojaType } from 'src/types/itemLojaType';
import { take } from 'rxjs';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss'],
})
export class CarrinhoComponent {
  @Input() carrinho: ItemPedidoType[] = [];
  @Output() incrementarItem = new EventEmitter<string>();
  @Output() decrementarItem = new EventEmitter<string>();

  public formularioEntrega!: FormGroup;
  public itensLoja: ItemLojaType[] = [];

  constructor(
    private _fb: FormBuilder,
    private _produtosService: ProdutosService
  ) {}

  ngOnInit() {
    this.formularioEntrega = this._fb.group({
      username: [null, Validators.required],
      delivery: [null, Validators.required],
    });

    this._produtosService
      .getItens()
      .pipe(take(1))
      .subscribe({
        next: (result: ItemLojaType[]) => {
          this.itensLoja = result;
        },
      });
  }

  public getItemLojaBy(id: string): ItemLojaType | undefined {
    return this.itensLoja.find((item) => item.id === id);
  }

  public incrementar(id: string): void {
    this.incrementarItem.emit(id);
  }

  public decrementar(id: string): void {
    this.decrementarItem.emit(id);
  }

  visible: boolean = false;

  showDialog() {
    this.visible = true;
  }

  public verificarSeEhValido(nomeCampoFormulario: string): boolean {
    const ehValido = !!this.formularioEntrega.get(nomeCampoFormulario)?.valid;
    const foiTocado =
      !!this.formularioEntrega.get(nomeCampoFormulario)?.touched;
    return ehValido || !foiTocado;
  }

  public realizarPedido(): void {
    this.formularioEntrega.markAllAsTouched();

    if (!this.formularioEntrega.valid || this.carrinho.length <= 0) {
      return;
    }

    const { username, delivery } = this.formularioEntrega.value;
    const pedido: PedidoType = {
      name: username,
      deliveryAddress: delivery,
      items: [...this.carrinho],
    };
    this._produtosService.realizarPedido(pedido).pipe(take(1)).subscribe({
      next: (result) => {
        console.log(result);
        if(result) {
          this.carrinho = [];
          this.visible = false;
          alert('PEDIDO REALIZADO COM SUCESSO!');
        }
      },
    })
  }

  public limparFormulario(): void {
    this.formularioEntrega.reset();
  }

  public totalItemsCarrinho(): number {
    return this.carrinho.reduce((acc, val) => (acc += val.quantity), 0);
  }
}
