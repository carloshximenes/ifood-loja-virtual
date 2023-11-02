import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdutosModule } from './pages/produtos/produtos.module';
import { NotFoundModule } from './pages/not-found/not-found.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ProdutosModule, NotFoundModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
