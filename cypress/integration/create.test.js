const authUser = require('../fixtures/auth-user.json');

describe('User can create an event', () => {
  const { email, password } = authUser;
  beforeEach(() => {
    cy.login(email, password);
  });

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

  it('should fill the form and submit the event', () => {
    cy.visit('/create-event');
    cy.get('#activity-select-label').parent().click();
    cy.findByRole('option', { name: /Intergenerational Event/i }).click();
    cy.contains('Next').click();
    cy.get('#size-select-label').parent().click();
    cy.findByRole('option', { name: /1 - 5/i }).click();
    cy.contains('Next').click();
    cy.contains('Add Date').click();
    cy.contains('Next').click();
    cy.get('#notes-label').type('Cypress test');
    cy.get('[type=submit]').click();
    cy.contains('Sending...');
    cy.wait(1000);
    cy.get('h6').contains('Event Request Sent!');
    cy.contains('Return to Events').click();
    cy.visit('/events');
  });
});
