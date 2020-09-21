import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { selectPokemon } from '../models/SelectPokemon.model';
import { FormGroup, FormBuilder, Validators, FormControl, ValidatorFn } from '@angular/forms';
import { fromEvent } from 'rxjs';
import { map, filter, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';



@Component({
  selector: 'app-form-pokemon',
  templateUrl: './form-pokemon.component.html',
  styleUrls: ['./form-pokemon.component.css']
})


export class FormPokemonComponent implements OnInit {
  @Output() onItemAdded: EventEmitter<selectPokemon>;
  fg: FormGroup;
  minLong = 3;
  searchResult: string[];

  constructor(fb: FormBuilder) {
    this.onItemAdded = new EventEmitter();
    this.fg = fb.group({
      nombre: ['', Validators.compose([
        Validators.required,
        this.nombreValidatorParameter(this.minLong)
      ])],
      url: ['']
    });

    this.fg.valueChanges.subscribe((form:any) =>{
      console.log('cambio el form: ', form);
    });
   }

  ngOnInit(): void {
    const elemNombre = <HTMLInputElement>document.getElementById('nombre');
    fromEvent(elemNombre, 'input') /*  Observable de eventos de entrada RXJS */
      .pipe(
        //1. Detectamos tecla presionada
        map((e: KeyboardEvent) => (e.target as HTMLInputElement).value),
        //2. Longitud de la cadena 
        filter(text => text.length > 2),
        //3. Intervalo de tiempo entre captura de eventos
        debounceTime(200),
        //4. Comparación de la cadena de entrada
        distinctUntilChanged(),
        //5. API de busqueda
        switchMap(() => ajax('/assets/datos.json'))
      ).subscribe(AjaxResponse => {
        console.log(AjaxResponse.response);
        console.log(AjaxResponse);
        this.searchResult = AjaxResponse.response;
      })
    
    //3. 
  }

  guardar(nombre:string, url: string): boolean{
    const p = new selectPokemon(nombre, url);
    this.onItemAdded.emit(p);
    return false;
  }

  /* Validación de formularios */
  nombreValidator(control: FormControl): { [s: string]: boolean }{
    const l = control.value.toString().trim().length;
    if (l > 0 && l < 3){
      return  {invalidNombre: true} ;
    }

  }

  nombreValidatorParameter(minLong: number): ValidatorFn{
    return (control: FormControl): { [s: string]: boolean } | null =>{
      const l = control.value.toString().trim().length;
      if (l > 0 && l < minLong){
        return  {minlongNombre: true} ;
      }

      return null
    }
  }

}
