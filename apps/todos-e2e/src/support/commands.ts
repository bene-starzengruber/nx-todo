// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Cypress {
  interface Chainable<Subject> {
    deleteAllTodos(): void;
    getComponent<C>(selector: string): Cypress.Chainable<C>;
  }
}

Cypress.Commands.add('deleteAllTodos', () => {
  cy.window().then(window => window['todoService'].deleteAllTodos().toPromise());
});

Cypress.Commands.add('getComponent', (selector: string) => {
  cy.get(selector).then(el => {
    const nativeElement = el.get()[0];
    return cy.window().then(window => {
      return cy.wrap((window as any).ng.getComponent(nativeElement));
    });
  });
});