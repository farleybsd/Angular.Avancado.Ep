import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
//import { MenuComponent } from './navegacao/menu/menu.component'; subistituido por NavegacaoModule
//import { HomeComponent } from './navegacao/home/home.component'; subistituido por NavegacaoModule
//import { FooterComponent } from './navegacao/footer/footer.component'; subistituido por NavegacaoModule
import { SobreComponent } from './institucional/sobre/sobre.component';
//import { rootRouterConfig } from './app.routes'; substituio por AppRoutingModule
import { CadastroComponent } from './demos/reactiveForms/cadastro/cadastro.component';
import { NgBrazil } from 'ng-brazil' ;
import { TextMaskModule } from 'angular2-text-mask';
import{CustomFormsModule} from 'ng2-validation'
import { NavegacaoModule } from './navegacao/navegacao.module';
import { AppRoutingModule } from './app.routes';
//import { ProdutoDashboardComponent } from './demos/arquitetura-componentes/produto-dashboard/produto-dashboard.component'; subistituido  produto.module
@NgModule({
  declarations: [
    AppComponent,
    //MenuComponent,   subistituido por NavegacaoModule
    //HomeComponent,   subistituido por NavegacaoModule
    //FooterComponent, subistituido por NavegacaoModule
    SobreComponent,
    CadastroComponent,
   // ProdutoDashboardComponent subistituido  produto.module
  ],
  imports: [
    NavegacaoModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgBrazil,
    TextMaskModule,
    CustomFormsModule,
    AppRoutingModule
    //[RouterModule.forRoot(rootRouterConfig, { useHash: false})] substituio por AppRoutingModule
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
