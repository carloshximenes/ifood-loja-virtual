import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { FieldsetModule } from 'primeng/fieldset';

import { CarrinhoComponent } from './carrinho.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  exports: [CarrinhoComponent],
  declarations: [CarrinhoComponent],
  imports: [
    CommonModule,
    DialogModule,
    ButtonModule,
    FieldsetModule,
    ReactiveFormsModule,
  ],
})
export class CarrinhoModule {}
