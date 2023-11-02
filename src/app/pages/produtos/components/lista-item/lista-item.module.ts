import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaItemComponent } from './lista-item.component';
import { ItemCardComponent } from './item-card/item-card.component';

@NgModule({
  declarations: [ListaItemComponent, ItemCardComponent],
  providers: [],
  exports: [ListaItemComponent],
  imports: [
    CommonModule
  ]
})

export class ListaItemModule { }
