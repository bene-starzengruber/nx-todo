export class TodoSelect {

  static readonly inputField = '[data-test-add-todo-input]';
  static readonly todo = `[data-test-todo]`;
  static readonly addButton = '[data-test-add-todo-button]';
  static readonly completeBox = `[data-test-complete-todo]`;
  static readonly errorMessage = `[data-test-error-message]`;

  static readonly andXMore = (x: number) => `[data-test-and-x-more="${x}"]`;
  static readonly todoByName = (name: string) => `[data-test-todo="${name}"]`;
  static readonly filter = (option: string) => `[data-test-filter="${option}"]`;

}