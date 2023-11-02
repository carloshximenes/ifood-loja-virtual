import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ItemLojaType } from 'src/types/itemLojaType';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss'],
})
export class ItemCardComponent {
  @Input() item: ItemLojaType | null = null;
  @Output() adicionarAoCarrinho = new EventEmitter<string>();
  constructor() {}

  ngOnInit() {}

  public adicionar() {
    if (!this.item?.isAvailable) return;
    this.adicionarAoCarrinho.emit(this.item.id);
  }
}
