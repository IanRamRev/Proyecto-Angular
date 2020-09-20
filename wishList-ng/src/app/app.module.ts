import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module'; 
import { AppComponent } from './app.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { ListaPokemonComponent } from './lista-pokemon/lista-pokemon.component';
import { PokemonDetallesComponent } from './pokemon-detalles/pokemon-detalles.component';
import { FormPokemonComponent } from './form-pokemon/form-pokemon.component';
import { PokemonApiClient } from './models/poke-api-client.model';

const routes: Routes = [ 
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: ListaPokemonComponent},
  {path: 'pokemon/:id', component: PokemonDetallesComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    ListaPokemonComponent,
    PokemonDetallesComponent,
    FormPokemonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    AppRoutingModule
  ],
  providers: [
    PokemonApiClient
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
