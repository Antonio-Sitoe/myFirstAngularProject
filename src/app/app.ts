import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Footer } from './components/footer/footer';

// Interface para definir a estrutura de uma tarefa
interface Tarefa {
  id: number;
  texto: string;
  concluida: boolean;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, CommonModule, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  ngOnInit(): void {
    this.mensagem();
  }

  mensagem() {
    console.log(' componente app iniciado');
  }
  // Título da aplicação usando signal (nova funcionalidade do Angular)
  protected readonly title = signal('Lista de Tarefas - Aprendendo Angular');

  // Lista de tarefas usando signal para reatividade
  protected readonly tarefas = signal<Tarefa[]>([
    { id: 1, texto: 'Aprender componentes Angular', concluida: false },
    { id: 2, texto: 'Entender data binding', concluida: false },
    { id: 3, texto: 'Praticar event handling', concluida: false },
  ]);

  // Texto da nova tarefa
  protected novaTarefa = '';

  // Contador para gerar IDs únicos
  private proximoId = 4;

  // Método para adicionar nova tarefa
  adicionarTarefa(): void {
    if (this.novaTarefa.trim()) {
      const tarefa: Tarefa = {
        id: this.proximoId++,
        texto: this.novaTarefa.trim(),
        concluida: false,
      };

      // Atualiza o signal com uma nova array
      this.tarefas.update((tarefas) => [...tarefas, tarefa]);

      // Limpa o campo de entrada
      this.novaTarefa = '';
    }
  }

  // Método para alternar o status de conclusão
  alternarConclusao(id: number): void {
    this.tarefas.update((tarefas) =>
      tarefas.map((tarefa) =>
        tarefa.id === id ? { ...tarefa, concluida: !tarefa.concluida } : tarefa
      )
    );
  }

  // Método para remover tarefa
  removerTarefa(id: number): void {
    this.tarefas.update((tarefas) =>
      tarefas.filter((tarefa) => tarefa.id !== id)
    );
  }

  // Getter para contar tarefas pendentes
  get tarefasPendentes(): number {
    return this.tarefas().filter((tarefa) => !tarefa.concluida).length;
  }

  // Função trackBy para otimizar performance do *ngFor
  trackByFn(index: number, item: Tarefa): number {
    return item.id;
  }
}
