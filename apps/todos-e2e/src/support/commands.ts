// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Cypress {
  interface Chainable<Subject> {
    login(email: string, password: string): void;
    deleteAllTodos(): void;
  }
}
//
// -- This is a parent command --
Cypress.Commands.add('login', (email, password) => {
  console.log('Custom command example: Login', email, password);
});

Cypress.Commands.add('deleteAllTodos', () => {
  cy.window().then(window => window['todoService'].deleteAllTodos().toPromise());
});


