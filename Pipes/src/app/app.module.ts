import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { NgBrazil } from 'ng-brazil'
import { TextMask } from 'ng-brazil';
import { CustomFormsModule } from 'ng2-validation'
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);

import { AppComponent } from './app.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { CadastroComponent } from './demos/reactiveForms/cadastro/cadastro.component';
import { NavegacaoModule } from './navegacao/navegacao.module';

import { AppRoutingModule } from './app.routes';
import { ProdutoAppComponet } from './demos/arquitetura-componentes/produto.app.component';
import { AuthGuard } from './Services/app.guard';
import { CadastroGuard } from './Services/cadastro.guard';
import { FilmesComponent } from './demos/pipes/filmes/FilmesComponent';
import { FileSizePiope } from './demos/pipes/filmes/filesize.pipe';


@NgModule({
  declarations: [
    AppComponent,
    SobreComponent,
    CadastroComponent,
    ProdutoAppComponet,
    FilmesComponent,
    FileSizePiope
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NavegacaoModule,
    TextMask.TextMaskModule,
    NgBrazil,
    CustomFormsModule,
    AppRoutingModule
  ],
  providers: [
   // {provide: APP_BASE_HREF, useValue: '/'} adc no index.htmL
   AuthGuard,
   CadastroGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
