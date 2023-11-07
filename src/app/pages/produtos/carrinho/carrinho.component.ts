import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ItemPedidoType, PedidoType } from 'src/types/pedidoType';
import { ProdutosService } from '../produtos.service';
import { ItemLojaType } from 'src/types/itemLojaType';

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

  constructor(
    private _fb: FormBuilder,
    private _produtosService: ProdutosService
  ) {}

  ngOnInit() {
    this.formularioEntrega = this._fb.group({
      username: [null, Validators.required],
      delivery: [null, Validators.required],
    });
  }

  public getItemLojaBy(id: string): ItemLojaType | undefined {
    return this._produtosService.getItemBy(id);
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
    console.log(pedido);
  }

  public limparFormulario(): void {
    this.formularioEntrega.reset();
  }
}
