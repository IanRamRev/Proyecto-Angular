import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-lista-pokemon',
    templateUrl: './lista-pokemon.component.html',
    styleUrls: ['./lista-pokemon.component.css']
})
export class ListaPokemonComponent implements OnInit {
    listaPokemones: string[];
    constructor() { 
        this.listaPokemones = ['Pikachu', 'Furret', 'Eeve', 'Charizard'];
    }

    ngOnInit(): void {
    }

}
