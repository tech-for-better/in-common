const authUser = require('../fixtures/auth-user.json');

describe('The SignUp Page', () => {
  const { email, password } = authUser;
  it('can signUp', function () {
    cy.visit('/sign-up');
    cy.get('#orgType').parent().click();
    cy.findByRole('option', { name: /School/i }).click();
    cy.get('#orgName').type('School Cypress');
    cy.get('#contactName').type('Miss Cypress');
    cy.get('#contactEmail').type('cypress3@test.test');
    cy.get('#contactNumber').type('0123456780');
    cy.get('#email').type('cypress3@test.test');
    cy.get('#password').type('123456');
    cy.get('[type=submit]').click();
    cy.wait(1000);
    cy.get('h1').contains('SUCCESS!');
    cy.get('h4').contains('Please wait for a confirmation email');
    cy.visit('/events');
  });
});
