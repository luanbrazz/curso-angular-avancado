import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ProdutoRoutingModule } from "./produto.route";
import { ProdutosDashboardComponent } from "./produtos-dashboard/produtos-dashboard.component";

//ajuste pipe de moeda
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);

import { ProdutoDetalheComponent } from "./componentes/produto-card-detalhe.component";
import { ProdutoCountComponent } from "./componentes/produto-count.component";
import { EditarProdutoComponent } from './editar-produto/editar-produto.component';
import { ProdutoAppComponent } from "./produto.app.component";
import { ProdutoService } from "./services/produto.service";


@NgModule({
    declarations: [
        ProdutoAppComponent,
        ProdutosDashboardComponent,
        ProdutoDetalheComponent,
        ProdutoCountComponent,
        EditarProdutoComponent,
    ],
    exports: [],
    imports: [
        CommonModule,
        ProdutoRoutingModule,
    ],
    providers: [
      ProdutoService,
    ]
})
export class ProdutoModule{

}
