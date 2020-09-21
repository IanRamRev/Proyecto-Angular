import { BehaviorSubject, Subject } from 'rxjs';
import {selectPokemon} from './SelectPokemon.model';

export class PokemonApiClient{
    pokemon: selectPokemon[];
    current: Subject<selectPokemon> = new BehaviorSubject<selectPokemon>(null);

    constructor(){
        this.pokemon = [];
    }

    add(p: selectPokemon){
        this.pokemon.push(p);
    }

    getAll(){
        return this.pokemon;
    }

    getById(id: string): selectPokemon{
        return this.pokemon.filter(function(p) {return p.id.toString() == id;})[0];
    }

    elegir(p: selectPokemon){
        this.pokemon.forEach(x => x.setSelected(false));
        p.setSelected(true);
        this.current.next(p);
    }

    subscribeOnChange(fn){
        this.current.subscribe(fn);
    }
}