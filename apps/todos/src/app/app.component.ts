import { Component, OnInit } from '@angular/core';
import { TodoService, TodoView } from './todo.service';
import { Todo } from './todo.interface';


@Component({
  selector: 'myorg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'todos';

  maxTodos = 5;

  newTodoText: string;
  view: TodoView = 'all';
  todos: Todo[] = [];
  errorShown = false;

  showCounter = true;

  constructor(private todoService: TodoService) {

  }

  ngOnInit() {
    // this.getTodos()
  }

  getTodos() {
    this.todoService.getTodos(this.view).subscribe(todos => {
      this.todos = todos;
    }, () => {
      this.errorShown = true;
    });
  }

  addTodo() {
    this.todoService.addTodo(this.newTodoText).subscribe(newTodo => {
      this.getTodos();
      // increase timeout to demonstrate automatic cypress retries
      setTimeout(() => {
        this.newTodoText = '';
      });
    });
  }

  deleteTodo(id: string) {
    this.todoService.deleteTodo(id).subscribe(() => {
      this.getTodos();
    });
  }

  toggleTodo(todo: Todo) {
    todo.completed = !todo.completed;
    this.todoService.updateTodo(todo).subscribe(() => {
      this.getTodos();
    })
  }

  changeView(view: TodoView) {
    this.view = view;
    this.getTodos();
  }

}
