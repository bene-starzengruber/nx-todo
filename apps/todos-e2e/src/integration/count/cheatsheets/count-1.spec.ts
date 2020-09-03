// import { CountPage } from '../../support/count.page';
// import { CountValidation } from '../../../../todos/src/app/counter/counter.component';

// describe('Counter', () => {

//   const page = new CountPage();
//   const action = page.action;
//   const assert = page.assert;

//   before(() => cy.visit('/'));

//   beforeEach(() => hide());

//   it('should initialize and manipulate counter', () => {
//     setInitialCount(-1);
//     show();
//     assert.count(-1);
//     action.clickAdd();
//     action.clickAdd();
//     assert.count(1);
//   });

//   it('should initialize and manipulate counter', () => {
//     setInputs(2, { max: 2, color: 'rgb(255, 0, 0)' });
//     show();

//     assert.count(2, 'rgb(0, 0, 0)');
//     action.clickAdd();
//     assert.count(3, 'rgb(255, 0, 0)');
//   });

//   function setInitialCount(count: number) {
//     cy.get('[data-test-initial-count]').clear().type(String(count));
//   }

//   function setInputs(initialCount: number, countValidation?: CountValidation) {
//     cy.window().then(window => window['setCounterInputs'](initialCount, countValidation));
//   }

//   function show() {
//     cy.get('[data-test-show-counter]').click();
//   }

//   function hide() {
//     cy.get('[data-test-hide-counter]').click();
//   }

// function mockCacheService() {
//   cy.getComponent<CounterComponent>('counter')
//     .then(component => {
//       component['cacheService']['getRandomNumber'] = () => 700;
//     })
// }

// });