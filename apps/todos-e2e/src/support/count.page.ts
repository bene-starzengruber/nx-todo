import { CountSelect } from './count.select';

export class CountPage {
  public action = CountActions;
  public assert = CountAssertions;
}

export class CountActions {
  static clickAdd() {
    cy.get(CountSelect.addButton).click();
  }
}

export class CountAssertions {
  static count(expected: number, expectedColor?: string) {
    const el = cy.get(CountSelect.count).should('have.text', expected)
    if (expectedColor) {
      el.should('have.css', 'color', expectedColor);
    }
  }
}
