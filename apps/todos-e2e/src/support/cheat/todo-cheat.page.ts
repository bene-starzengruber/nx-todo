import { TodoSelect } from './todo-cheat.select';
import { Todo } from '../../../../todos/src/app/todo.interface';

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

  static andXMoreShown(x: number) {
    cy.get(TodoSelect.andXMore(x));
  }

  static errorShown() {
    cy.get(TodoSelect.errorMessage);
  }

}

export class TodoServer {

  static todosGet(nrOfTodos: number) {
    const todos = Array.from({ length: nrOfTodos }).map((_, idx) => ({
      id: String(Math.random()),
      title: `Todo ${idx}`,
      completed: false
    }))

    cy.server();
    cy.route({
      url: `/todos`,
      method: 'get',
      response: JSON.stringify(todos)
    });
  }

  static todosGetError() {
    cy.server();
    cy.route({
      url: `/todos`,
      method: 'get',
      status: 500,
      response: 'there was an error...'
    });
  }

}