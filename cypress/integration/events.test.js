const authUser = require('../fixtures/auth-user.json');

describe('User can manage the events', () => {
  // const { email, password } = authUser;
  // beforeEach(() => {
  //   cy.login(email, password);
  // });

  it('should logging in and redirect to events page', () => {
    cy.visit('/');
    cy.url().should('include', '/events');
  });

  it('should confirm an event', () => {
    cy.visit('/events');
    cy.get('#confirmed-date-label').parent().click();
    cy.findByRole('option', { name: /26th December 2021, 3:00pm/i }).click();
    cy.contains('Confirm').click();
  });
});
