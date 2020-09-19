import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { AppRoutingModule } from './app-routing.module'; 
import { AppComponent } from './app.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { ListaPokemonComponent } from './lista-pokemon/lista-pokemon.component';
import { PokemonDetallesComponent } from './pokemon-detalles/pokemon-detalles.component';

const routes: Routes = [ 
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: ListaPokemonComponent},
  {path: 'pokemon', component: PokemonDetallesComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    ListaPokemonComponent,
    PokemonDetallesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
