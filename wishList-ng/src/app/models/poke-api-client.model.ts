import {selectPokemon} from './SelectPokemon.model';

export class PokemonApiClient{
    pokemon: selectPokemon[];

    constructor(){
        this.pokemon = [];
    }

    add(p: selectPokemon){
        this.pokemon.push(p);
    }

    getAll(){
        return this.pokemon;
    }
}