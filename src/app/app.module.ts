import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdutosModule } from './pages/produtos/produtos.module';
import { NotFoundModule } from './pages/not-found/not-found.module';
import { LoginModule } from './pages/login/login.module';

export let AppInjector: Injector;

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    
    AppRoutingModule,

    ProdutosModule,
    NotFoundModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule {
  constructor(private injector: Injector) {
    AppInjector = this.injector;
  }
}
