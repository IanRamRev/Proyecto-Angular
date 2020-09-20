import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { PokemonApiClient } from './../models/poke-api-client.model';
import {selectPokemon} from './../models/SelectPokemon.model';

@Component({
    selector: 'app-lista-pokemon',
    templateUrl: './lista-pokemon.component.html',
    styleUrls: ['./lista-pokemon.component.css']
})
export class ListaPokemonComponent implements OnInit {
    @Output() onItemAdded: EventEmitter<selectPokemon>;
    constructor(public pokemonApiClient: PokemonApiClient) { 
        this.onItemAdded = new EventEmitter();
    }

    ngOnInit(): void {
    }

    agregado(p: selectPokemon){
        this.pokemonApiClient.add(p);
        this.onItemAdded.emit(p);
    }

    elegido(e: selectPokemon){
        this.pokemonApiClient.getAll().forEach(x => x.setSelected(false));
        e.setSelected(true);    
    }

}
