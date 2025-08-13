import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Enviaformulario {
  envia() {
    console.log('Enviando formulario.');
  }
}
