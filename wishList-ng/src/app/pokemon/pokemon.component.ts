import { Component, OnInit, Input, HostBinding} from '@angular/core';
import {selectPokemon} from './../models/SelectPokemon.model';

@Component({
    selector: 'app-pokemon',
    templateUrl: './pokemon.component.html',
    styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
    @Input() pokemon: selectPokemon;
    @HostBinding('attr.class') cssClass = 'col-md-4';
    constructor() { 
    }

    ngOnInit(): void {
        
    }
}
