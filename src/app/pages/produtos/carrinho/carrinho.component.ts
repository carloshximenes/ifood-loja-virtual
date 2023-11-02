import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ItemPedidoType } from 'src/types/pedidoType';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss']
})
export class CarrinhoComponent {
  @Input() carrinho: ItemPedidoType[] = [];
  @Output() incrementarItem = new EventEmitter<string>();
  @Output() decrementarItem = new EventEmitter<string>();

  public incrementar(id: string): void {
    this.incrementarItem.emit(id);
  }

  public decrementar(id: string): void {
    this.decrementarItem.emit(id);
  }
}
