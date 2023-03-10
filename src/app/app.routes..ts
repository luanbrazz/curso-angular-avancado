import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BarDiZonesComponent } from "./dem/bar-di-zones/bar-di-zones.component";
import { DataBindingComponent } from "./dem/data-binding/data-binding.component";
import { FilmesComponent } from "./dem/pipes/filmes/filmes.component";
import { CadastroComponent } from "./dem/reactiveForms/cadastro/cadastro.component";
import { SobreComponent } from "./institucional/sobre/sobre.component";
import { HomeComponent } from "./navegacao/home/home.component";
import { NotFoundComponent } from "./navegacao/not-found/not-found.component";
import { AuthGuard } from "./services/app.guard";

const rootRouterConfig: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },

    { path: 'home', component: HomeComponent },
    // {path: 'contato', component: ContatoComponent },
    { path: 'sobre', component: SobreComponent },
    { path: 'feature-data-binding', component: DataBindingComponent },
    { path: 'cadastro', component: CadastroComponent, canDeactivate: []} ,

    { path: 'filmes', component: FilmesComponent },

    { path: 'bar', component: BarDiZonesComponent },

    {
      path: 'produtos',
      loadChildren: () => import('./dem/arquitetura-componentes/produto.module')
          .then(m => m.ProdutoModule)
    },


    { path: 'admin',
            loadChildren: () => import('./admin/admin.module')
            .then(m => m.AdminModule),
          canLoad: [AuthGuard], canActivate: [AuthGuard]},

    // erro 404 - **SEMPRE POR ULTIMO
    { path: '**', component: NotFoundComponent},
];

@NgModule({
  imports:[                                 //{enableTracing: true} não usar em prod
    RouterModule.forRoot(rootRouterConfig, {enableTracing: false})
  ],
  exports:[
    RouterModule,
  ]
})
export class AppRoutingModule{

}

