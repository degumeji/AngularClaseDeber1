import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modulos/home/home.component';
import { NotfoundComponent } from './modulos/notfound/notfound.component';
import { PersonaComponent } from './modulos/persona/persona.component';
import { NotaComponent } from './modulos/nota/nota.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'persona', component: PersonaComponent },
  { path: 'nota', component: NotaComponent },
  { path: '**', component: NotfoundComponent }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
