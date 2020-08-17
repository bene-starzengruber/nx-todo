import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, concat } from 'rxjs';
import { switchMap, ignoreElements } from 'rxjs/operators';
import { Todo } from './todo.interface';

export type TodoView = 'all' | 'open' | 'done';

@Injectable({ providedIn: 'root' })
export class TodoService {

  private static readonly BASE_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) {
    this.exposeToCypress('todoService', this);
  }

  getTodos(view: TodoView): Observable<Todo[]> {
    const filter = view === 'all' ? '' : `?completed_like=${view === 'done' ? true : false}`;
    return this.http.get<Todo[]>(`${TodoService.BASE_URL}/todos${filter}`);
  }

  addTodo(name: string): Observable<Todo> {
    return this.http.post<Todo>(`${TodoService.BASE_URL}/todos`, {
      title: name,
      completed: false
    });
  }

  updateTodo(todo: Todo): Observable<Todo> {
    return this.http.put<Todo>(`${TodoService.BASE_URL}/todos/${todo.id}`, {
      id: todo.id,
      title: todo.title,
      completed: todo.completed
    });
  }

  deleteTodo(id: string): Observable<void> {
    return this.http.delete<void>(`${TodoService.BASE_URL}/todos/${id}`);
  }

  deleteAllTodos(): Observable<void> {
    return this.getTodos('all').pipe(
      switchMap(todos => concat(...todos.map(todo => this.deleteTodo(todo.id)))),
      ignoreElements()
    );
  }

  private exposeToCypress(property: string, value: any) {
    if (window['Cypress']) {
      window[property] = value;
    }
  }

}