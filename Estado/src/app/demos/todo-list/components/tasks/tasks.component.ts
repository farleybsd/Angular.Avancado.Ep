import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import { TasksService } from '../../todo.service';
import { Store } from '../todo-list/todo.store';

@Component({
  selector: 'tasks',
  templateUrl: './tasks.component.html'
})
export class TasksComponent implements OnInit,OnDestroy {

  todolist$: Observable<any[]>
  subscription: Subscription;
  constructor(
    private taskService:TasksService,
    private store : Store
    ) {}

  ngOnInit() {  
   //this.todolist$ = this.taskService.getTodoList$;
   this.todolist$ = this.store.getTodoList()
      .pipe(
        map(todolist => todolist.filter(task => !task.iniciado && !task.finalizado)))

        this.subscription = this.taskService.getTodoList$.subscribe(); // ativa fluxo de dados
  }  
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}