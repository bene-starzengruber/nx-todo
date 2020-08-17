import { TodoPage } from '../support/todo.page';

describe('todos', () => {

  const page = new TodoPage();
  const action = page.action;
  const assert = page.assert;
  const server = page.server;

  it('should show "and x more" message', () => {
    server.todosGet(7);
    cy.visit('/');
    assert.andXMoreShown(2);
  });

  it('should show error message if backend call fails', () => {
    server.todosGetError();
    cy.visit('/');
    assert.errorShown();
  });

});
