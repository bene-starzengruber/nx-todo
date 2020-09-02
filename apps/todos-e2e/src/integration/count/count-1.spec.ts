import { CountPage } from '../../support/count.page';
import { CountValidation } from '../../../../todos/src/app/counter/counter.component';

describe('Counter', () => {

  const page = new CountPage();
  const action = page.action;
  const assert = page.assert;

  before(() => cy.visit('/'));

  beforeEach(() => toggleComponent(false));

  it('should initialize and manipulate counter', () => {

  });


  function toggleComponent(show: boolean) {
    cy.get(`[data-test-${show ? 'show' : 'hide'}-counter]`).click();
  }

  function hide() {

  }

});