import { TodoPage } from '../support/todo.page';

describe('todos', () => {

  const page = new TodoPage();
  const action = page.action;
  const assert = page.assert;
  const server = page.server;

  before(() => cy.visit('/'));

  beforeEach(() => {
    server.getTodos();
    cy.visit('/');
  })

  it('should do stuff', () => {
    server.postTodo('todo 1');
    action.typeIntoInput('todo 1{enter}');
    assert.inputText('');
    assert.todos(['todo 1']);

    server.postTodo('todo 2');
    action.typeIntoInput('todo 2');
    action.clickAddButton();
    assert.todos(['todo 1', 'todo 2']);

    action.toggleComplete('todo 1');
    action.filter('open');
    assert.todos(['todo 2']);
    action.filter('done');
    assert.todos(['todo 1']);
    action.filter('all');
    assert.todos(['todo 1', 'todo 2']);
  });

});
