describe('todos', () => {

  before(() => cy.visit('/'));

  beforeEach(() => {
    cy.window().then(window => window['todoService'].deleteAllTodos().toPromise());
    cy.visit('/');
    cy.get('data-test-todo').should('have.length', 0);
  })

  it('should do stuff', () => {

    cy.get('[data-test-add-todo-input]')
      .type('todo 1{enter}')
      .should('have.value', '');

    cy.get(`[data-test-todo="todo 1"]`)
      .should('have.length', 1);

    cy.get('[data-test-add-todo-input]')
      .type('todo 2');

    cy.get('[data-test-add-todo-button]')
      .click();

    cy.get(`[data-test-todo="todo 2"]`)
      .should('have.length', 1);

    cy.get('[data-test-todo]')
      .should('have.length', 2);

    cy.get(`[data-test-todo="todo 1"]`)
      .within(() => {
        cy.get(`[data-test-complete-todo]`).click();
      });

    cy.get('[data-test-filter="open"]')
      .click();

    cy.get('[data-test-todo]')
      .should('have.length', 1)
      .should('have.attr', 'data-test-todo', 'todo 2');

    cy.get('[data-test-filter="done"]')
      .click();

    cy.get('[data-test-todo]')
      .should('have.length', 1)
      .should('have.attr', 'data-test-todo', 'todo 1');

    cy.get('[data-test-filter="all"]')
      .click();

    cy.get('[data-test-todo]').should('have.length', 2);
    cy.get(`[data-test-todo="todo 1"]`)
      .should('have.length', 1);
    cy.get(`[data-test-todo="todo 2"]`)
      .should('have.length', 1);

  });


});
