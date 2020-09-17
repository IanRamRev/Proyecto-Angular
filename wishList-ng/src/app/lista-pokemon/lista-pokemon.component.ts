import { Component, OnInit } from '@angular/core';
import {selectPokemon} from './../models/SelectPokemon.model';

@Component({
    selector: 'app-lista-pokemon',
    templateUrl: './lista-pokemon.component.html',
    styleUrls: ['./lista-pokemon.component.css']
})
export class ListaPokemonComponent implements OnInit {
    listaPokemones: selectPokemon[];
    constructor() { 
        this.listaPokemones = [];
    }

    ngOnInit(): void {
    }

    guardar(nombre:string, url:string): boolean{
        this.listaPokemones.push(new selectPokemon(nombre, url));
        //console.log(this.listaPokemones);
        return false; // Recarga página
    }

}
