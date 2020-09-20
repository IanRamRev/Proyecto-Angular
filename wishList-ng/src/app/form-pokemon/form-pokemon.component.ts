import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { selectPokemon } from '../models/SelectPokemon.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-pokemon',
  templateUrl: './form-pokemon.component.html',
  styleUrls: ['./form-pokemon.component.css']
})


export class FormPokemonComponent implements OnInit {
  @Output() onItemAdded: EventEmitter<selectPokemon>;
  fg: FormGroup;

  constructor(private fb: FormBuilder) {
    this.onItemAdded = new EventEmitter();
    this.fg = this.fb.group({
      nombre: ['', Validators.required],
      url: ['', Validators.required]
    });

    this.fg.valueChanges.subscribe((form:any) =>{
      console.log('cambio el form: ', form);
    });
   }

  ngOnInit(): void {
  }

  guardar(nombre:string, url: string): boolean{
    const p = new selectPokemon(nombre, url);
    this.onItemAdded.emit(p);
    return false;
  }

}
