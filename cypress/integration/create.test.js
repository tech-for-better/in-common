const authUser = require('../fixtures/auth-user.json');

describe('User can create an event', () => {
  // const { email, password } = authUser;
  // beforeEach(() => {
  //   cy.login(email, password);
  // });

  it('should logging in and redirect to events page', () => {
    cy.visit('/');
    cy.url().should('include', '/events');
  });

  it('should open the menu', () => {
    cy.visit('/events');
    cy.get('#demo-customized-button').click();
  });

  it('should access the Create Event page', () => {
    cy.visit('/events');
    cy.get('#demo-customized-button').click();
    cy.contains('Create Event').click();
    cy.url().should('include', '/create-event');
  });
});
