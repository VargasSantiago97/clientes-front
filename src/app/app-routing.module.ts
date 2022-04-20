import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './components/index/index.component';
import { CargaLiquidacionMensualComponent } from './components/carga-liquidacion-mensual/carga-liquidacion-mensual.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  {
    path: 'inicio', component: IndexComponent
  },
  { path: 'cargaLiquidacion/:idPeriodo/:idCliente', component: CargaLiquidacionMensualComponent },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
