// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Cypress {
  interface Chainable<Subject> {
    deleteAllTodos(): void;
  }
}

Cypress.Commands.add('deleteAllTodos', () => {
  cy.window().then(window => window['todoService'].deleteAllTodos().toPromise());
});


