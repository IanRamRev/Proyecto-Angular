import { v4 as uuid } from 'uuid';

export class selectPokemon{
    private selected: boolean;
    public ataques: string[];
    id = uuid();
    // public en parámetro constructor reduce esto
    //nombre: string;
    // imagenUrl: string;

    constructor (public nombre:string, public imagenUrl:string){
        this.ataques = ['Impactrueno', 'Onda trueno', 'Doble equipo'];
        // public en parámetro constructor reduce esto
        //this.nombre = name;
        //this.imagenUrl = url;
    }

    isSelected(): boolean{
        return this.selected;
    }

    setSelected(s: boolean){
        this.selected = s;
    }
}
