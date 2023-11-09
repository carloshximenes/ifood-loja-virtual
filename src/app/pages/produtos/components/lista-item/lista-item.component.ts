import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ItemLojaType } from 'src/types/itemLojaType';

@Component({
  selector: 'app-lista-item',
  templateUrl: './lista-item.component.html',
  styleUrls: ['./lista-item.component.scss'],
})
export class ListaItemComponent {
  @Input() listaItem: ItemLojaType[] = [];
  @Output() adicionarItemAoCarrinho = new EventEmitter<string>();
  @Output() verDetalhesItem = new EventEmitter<string>();

  constructor() {}

  public adicionar(id: string): void {
    this.adicionarItemAoCarrinho.emit(id);
  }

  public verDetalhes(id: string): void {
    this.verDetalhesItem.emit(id);
  }
}
