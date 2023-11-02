import { Injectable } from '@angular/core';
import { itemLoja } from 'src/constants/item-loja';
import { ItemLojaType } from 'src/types/itemLojaType';

// @Injectable({
//   providedIn: 'root',
// })
export class ProdutosService {
  constructor() {}

  public getItens(): ItemLojaType[] {
    return itemLoja;
  }

  public getItemBy(id: string): ItemLojaType | undefined {
    return itemLoja.find((item) => item.id === id);
  }
}
