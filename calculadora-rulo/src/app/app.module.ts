import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { PanelRuloComponent } from './componentes/panel-rulo/panel-rulo.component';
import { CotizacionesComponent } from './componentes/cotizaciones/cotizaciones.component';
import { PanelPfComponent } from './componentes/panel-pf/panel-pf.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PanelRuloComponent,
    CotizacionesComponent,
    PanelPfComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
