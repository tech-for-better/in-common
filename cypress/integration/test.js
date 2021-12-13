Cypress.config({
  experimentalSessionSupport: true,
});

describe('The Home Page', () => {
  it('can successfully load', () => {
    cy.visit('/');
  });
});

Cypress.Commands.add('login', (email, password) => {
  cy.session([email, password], () => {
    cy.visit('/');
    cy.get('[type=email]').type(email);
    cy.get('[type=password]').type(password);
    cy.get('[type=submit]').click();
    cy.url().should('contain', '/');
  });
});

describe('User account can see Approval pending message', () => {
  beforeEach(() => {
    cy.login('ad@ad.ad', 'adriana123');
  });

  it('should actually be accessible', () => {
    cy.visit('/');
  });

  it('should have the correct message', () => {
    cy.visit('/');
    cy.get('p').should(
      'contain',
      `Approval pending, we'll email you once your account has been approved!`
    );
  });
});
