import { TodoPage } from '../../support/cheat/todo-cheat.page';

describe('todos', () => {

  // create page
  const page = new TodoPage();
  const action = page.action;
  const assert = page.assert;

  before(() => cy.visit('/'));

  beforeEach(() => {
    // custom command
    cy.deleteAllTodos();
    cy.visit('/');
    assert.todos([]);
  })

  it('should do stuff', () => {
    action.typeIntoInput('todo 1{enter}');
    assert.inputText('');
    assert.todos(['todo 1']);
    action.typeIntoInput('todo 2');
    action.clickAddButton();
    assert.todos(['todo 1', 'todo 2']);
    action.toggleComplete('todo 1');
    action.filter('open');
    assert.todos(['todo 2']);
    action.filter('all');
    assert.todos(['todo 1', 'todo 2']);
  });


});
