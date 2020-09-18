import { Component, OnInit, Input, HostBinding, EventEmitter, Output} from '@angular/core';
import {selectPokemon} from './../models/SelectPokemon.model';

@Component({
    selector: 'app-pokemon',
    templateUrl: './pokemon.component.html',
    styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
    @Input() pokemon: selectPokemon;
    @Input() indice: number;
    @HostBinding('attr.class') cssClass = 'col-md-4 elementoDesplegado';
    @Output() clicked: EventEmitter<selectPokemon>;
 
    constructor() { 
        this.clicked = new EventEmitter();
    }

    ngOnInit(): void {
        
    }

    ir(){
        this.clicked.emit(this.pokemon);
        return false; /* Ningun efecto en HTML */
    }
}
