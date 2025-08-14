import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Enviaformulario } from '../../services/enviaformulario';

@Component({
  selector: 'app-home',
  providers: [Enviaformulario],
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  private enviaService = inject(Enviaformulario);
  exibeFooter: boolean = false;

  @Input() minhaPropriedade!: string;
  @Output() emitindo = new EventEmitter<string>();
  title = 'Meu primeiro projeto Angular';
  deveMostrarTitulo = false;

  atualizarTitulo(novoTitulo: string) {
    this.title = novoTitulo;
    this.emitindo.emit(novoTitulo);
  }

  mostrarTitulo() {
    this.deveMostrarTitulo = !this.deveMostrarTitulo;
  }
}
