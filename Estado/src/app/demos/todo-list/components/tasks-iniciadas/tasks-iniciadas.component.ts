import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { TasksService } from '../../todo.service';
import { Store } from '../todo-list/todo.store';

@Component({
  selector: 'tasks-iniciadas',
  templateUrl: './tasks-iniciadas.component.html'
})
export class TasksIniciadasComponent implements OnInit {

  iniciados$: Observable<any[]>;

  constructor(
    private tasService :TasksService,
    private store : Store
    ) {}

  ngOnInit() {
   //this.iniciados$ = this.tasService.getTodoList$
   this.iniciados$ = this.store.getTodoList()
   .pipe(
     map(todolist => todolist.filter(task => task.iniciado && !task.finalizado))
   );
  }
  onToglle(event){
    this.tasService.toggle(event);// Funcao que Atualiza a Store
  }
}