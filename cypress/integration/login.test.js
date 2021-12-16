const authUser = require('../fixtures/auth-user.json');

describe('The Home Page', () => {
  it('can successfully load', () => {
    cy.visit('/');
  });
});

describe('User should log in with email and password', () => {
  const { email, password } = authUser;
  beforeEach(() => {
    cy.login(email, password);
  });

  it('should logging in and redirect to events page', () => {
    cy.visit('/');
    cy.url().should('include', '/events');
  });

  it('should logout', () => {
    cy.visit('/');
    cy.url().should('include', '/events');
    cy.get('#demo-customized-button').click();
    cy.contains('Logout').click();
    cy.get('h1').contains('Log in');
  });
});
