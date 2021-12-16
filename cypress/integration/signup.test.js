const authUser = require('../fixtures/auth-user.json');

describe('The SignUp Page', () => {
  const { email, password } = authUser;
  it('can signUp', function () {
    cy.visit('/sign-up');
    cy.get('#organisation-type').parent().click();
    cy.findByRole('option', { name: /School/i }).click();
    cy.get('#filled-organisation-name-input').type('School Cypress');
    cy.get('#filled-primary-contact-name-input').type('Miss Cypress');
    cy.get('#filled-organisation-email-input').type(email);
    cy.get('#filled-primary-contact-number-input').type('0123456780');
    cy.get('#filled-email-input').type(email);
    cy.get('#filled-password-input').type(password);
    cy.get('[type=submit]').click();
    cy.wait(1000);
    cy.get('h1').contains('SUCCESS!');
    cy.get('h4').contains('Please wait for a confirmation email');
    cy.visit('/events');
  });
});
