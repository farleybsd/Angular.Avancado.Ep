import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from "../../task";

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['todo-list.component.css']  
})
export class ToDoListComponent {

  @Input()
  list: Task[]; // Emtrada de Dados
  
  @Output()// Saida De Eventos
  toggle = new EventEmitter<any>(); // emitir o evento para metodo responsavel

  toggleItem(index:number,acao:string) {

    const task = this.list[index];

    switch (acao) {
      case 'iniciar':
        task.finalizado = false;
        task.iniciado = true;
        break; 
      case 'finalizar':
        task.finalizado = true;
        task.iniciado = false;
        break; 
      case 'retomar':
        task.finalizado = false;
        task.iniciado = true;
        break; 
      case 'cancelar':
        task.finalizado = false;
        task.iniciado = false;
        break;      
    }

    this.toggle.emit({
      task:{...task}
    });//emitir um valor que sera passado para o service
  }
}