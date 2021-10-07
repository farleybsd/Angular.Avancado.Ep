import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditarProdutoComponent } from './editar-produto/editar-produto.component';
import { ProdutoDashboardComponent } from './produto-dashboard/produto-dashboard.component';
import { ProdutoAppComponet } from './produto.app.component';

const produtoRouterConfig: Routes = [
    { path: '', component: ProdutoAppComponet,
      children:[
        { path: '', component: ProdutoDashboardComponent},
        { path: 'editar/:id', component: EditarProdutoComponent }
    ] },
    
];

@NgModule({
    imports: [
        RouterModule.forChild(produtoRouterConfig)
    ],
    exports: [RouterModule]
})
export class ProdutoRoutingModule { }