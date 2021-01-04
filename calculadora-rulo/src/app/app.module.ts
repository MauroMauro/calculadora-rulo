import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { PanelRuloComponent } from './componentes/panel-rulo/panel-rulo.component';
import { CotizacionesComponent } from './componentes/cotizaciones/cotizaciones.component';
import { PanelPfComponent } from './componentes/panel-pf/panel-pf.component';
import { FormsModule } from '@angular/forms';
//rutas
import { AppRoutingModule } from 'src/app/my-route.routing';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PanelRuloComponent,
    CotizacionesComponent,
    PanelPfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
