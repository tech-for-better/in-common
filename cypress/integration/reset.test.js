const authUser = require('../fixtures/auth-user.json');

describe('User should send password reset email', () => {
  const { email, password } = authUser;
  it('should actually be accessible', () => {
    cy.visit('/');
  });

  it('should open a card and click on Back to log in', () => {
    cy.visit('/');
    cy.contains('Forgot password').click();
    cy.contains('Back to log in').click();
    cy.get('h1').contains('Log in');
  });

  it('should open a card and reset password', () => {
    cy.visit('/');
    cy.contains('Forgot password').click();
    cy.get('[type=email]').type(email);
    cy.contains('Send password reset email').click();
  });
});
