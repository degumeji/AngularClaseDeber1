import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './modulos/home/home.component';
import { NotfoundComponent } from './modulos/notfound/notfound.component';
import { NotaComponent } from './modulos/nota/nota.component';
import { PersonaComponent } from './modulos/persona/persona.component';
import { ModalPersonaComponent } from './modulos/persona/modal-persona/modal-persona.component';
import { ModalNotaComponent } from './modulos/nota/modal-nota/modal-nota.component';
import { NotaPipe } from './shared/pipes/nota.pipe';
import { ModalRepresentanteComponent } from './modulos/persona/modal-representante/modal-representante.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    NotfoundComponent,
    NotaComponent,
    PersonaComponent,
    ModalPersonaComponent,
    ModalNotaComponent,
    NotaPipe,
    ModalRepresentanteComponent
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
