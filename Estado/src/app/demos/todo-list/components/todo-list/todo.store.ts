import { BehaviorSubject, Observable } from "rxjs";
import { Task } from "../../task";
import {map} from "rxjs/operators"

export interface State {
    todoList : Task[]
}

const state: State ={
    todoList:[]
}

export class Store{
    private subject = new BehaviorSubject<State>(state);//Propagador Do Estado Atual
    private store = this.subject.asObservable();

    get value(){
        return this.subject.value;
    }

    set(name:string,state:any){
        this.subject.next({
            ...this.value,[name] : state
        }) // next propaga o valor
    }

    public getTodoList() : Observable<Task[]>{
        return this.store
        .pipe(map(store => store.todoList))
    }
}