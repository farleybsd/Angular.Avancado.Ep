import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './navegacao/home/home.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { CadastroComponent } from './demos/reactiveForms/cadastro/cadastro.component';
import { NotFoundComponent } from './navegacao/not-found/not-found.component';
import { AuthGuard } from './Services/app.guard';
import { CadastroGuard } from './Services/cadastro.guard';
import { FilmesComponent } from './demos/pipes/filmes/FilmesComponent';

const rootRouterConfig: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent},
    { path: 'sobre', component: SobreComponent },
    { path: 'filmes', component: FilmesComponent },
    { path: 'cadastro', component: CadastroComponent,canDeactivate:[CadastroGuard] },
    { path: 'produtos', 
            loadChildren: () => import('./demos/arquitetura-componentes/produto.module')
            .then(m => m.ProdutoModule)},
    { path: 'admin', 
            loadChildren: () => import('./admin/admin.module')
            .then(m => m.AdminModule),
            canLoad:[AuthGuard],
            canActivate:[AuthGuard]
    },

    { path: '**', component: NotFoundComponent}, // Tem que ser a ultima Declaracao
];

@NgModule({
    imports:[
        RouterModule.forRoot(rootRouterConfig,{enableTracing:false})
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule{}