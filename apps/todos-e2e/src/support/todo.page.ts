import { TodoSelect } from './todo.select';
import { Todo } from '../../../todos/src/app/todo.interface';

export class TodoPage {
  public action = TodoActions;
  public assert = TodoAssertions;
  public server = TodoServer;
}

export class TodoActions {

  static typeIntoInput(text: string) {
    cy.get(TodoSelect.inputField)
      .type(`${text}`);
  }

  static clickAddButton() {
    cy.get(TodoSelect.addButton)
      .click();
  }

  static toggleComplete(todo: string) {
    cy.get(TodoSelect.todoByName(todo))
      .within(() => {
        cy.get(TodoSelect.completeBox).click();
      });
  }

  static filter(option: 'all' | 'open' | 'done') {
    cy.get(TodoSelect.filter(option))
      .click();
  }

}

export class TodoAssertions {

  static inputText(expected: string) {
    cy.get(TodoSelect.inputField)
      .should('have.value', expected);
  }

  static todos(expectedTodoNames: string[]) {
    cy.get(TodoSelect.todo).should('have.length', expectedTodoNames.length);

    expectedTodoNames.forEach(name => {
      cy.get(TodoSelect.todoByName(name));
    });
  }

}

export class TodoServer {

  static readonly baseUrl = 'http://localhost:3000';

  private static todos: Todo[] = [];

  static postTodo(added: string) {
    const todo: Todo = {
      id: String(Math.random()),
      title: added,
      completed: false
    };

    cy.server();
    cy.route({
      url: `/todos`,
      method: 'post',
      response: JSON.stringify(todo),
      onRequest: response => {
        console.error('here', response);
        this.todos.push(response);
        this.getTodos();
      }
    });


  }


  static getTodos() {
    cy.server();
    cy.route({
      url: `/todos`,
      method: 'get',
      response: JSON.stringify(this.todos)
    });
  }

}