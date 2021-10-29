import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from './task';
import { Store } from './components/todo-list/todo.store';
import { tap } from 'rxjs/operators';

@Injectable()
export class TasksService {

  constructor(
    private http:HttpClient,
    private store : Store
    ) { }

  getTodoList$ : Observable<Task[]> = this.http
  .get<Task[]>('http://localhost:3000/todolist')
  .pipe(tap(next => this.store.set('todoList',next)))

  getTodoList2() : Observable<Task[]>{
    return this.http
    .get<Task[]>('http://localhost:3000/todolist')
  }
 
  toggle(event:any){
    this.http
        .put(`http://localhost:3000/todolist/${event.task.id}`,event.task)
        .subscribe(()=>{
          //verficando qual task foi alterada para persistir para store
          const  value = this.store.value.todoList;

          const todoList = value.map((task :Task)=>{
            if(event.task.id === task.id){
              return{...task,...event.task} // propagando alteracoes
            }
            else{
              return task;
            }
          });
          this.store.set('todolist',todoList); // atualizando o estado na store
        })
  }
}

//HttpClient tem que estar importado no app.module junto com commoModule