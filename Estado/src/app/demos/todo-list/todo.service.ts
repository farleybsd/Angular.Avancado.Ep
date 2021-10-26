import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from './task';

@Injectable()
export class TasksService {

  constructor(private http:HttpClient) { }

  getTodoList$ : Observable<Task[]> = this.http
  .get<Task[]>('http://localhost:3000/todolist')

  getTodoList2() : Observable<Task[]>{
    return this.http
    .get<Task[]>('http://localhost:3000/todolist')
  }
 
}

//HttpClient tem que estar importado no app.module junto com commoModule