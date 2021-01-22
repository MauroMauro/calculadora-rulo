import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CotizacionesComponent } from 'src/app/componentes/cotizaciones/cotizaciones.component';
import { PanelRuloComponent } from 'src/app/componentes/panel-rulo/panel-rulo.component';
import { PanelPfComponent } from 'src/app/componentes/panel-pf/panel-pf.component';


const routes: Routes = [
  { path: 'cotizaciones', component: CotizacionesComponent}, 
  { path: 'panel-rulo', component: PanelRuloComponent}, 
  { path: 'panel-pf', component: PanelPfComponent}, 
	{ path: '**', pathMatch: 'full', redirectTo: 'cotizaciones' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}