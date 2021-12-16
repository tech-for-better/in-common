// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import '@testing-library/cypress/add-commands';

Cypress.config({
  experimentalSessionSupport: true,
});

Cypress.Commands.add('login', (email, password) => {
  cy.session([email, password], () => {
    cy.visit('/');
    cy.get('[type=email]').type(email);
    cy.get('[type=password]').type(password);
    cy.get('[type=submit]').click();
    cy.url().should('contain', '/events');
  });
});

// test authentication with Firebase
// import { auth } from '../../firebase';
// import { signInWithEmailAndPassword, signOut } from 'firebase/auth';

// Cypress.Commands.add('login', (email, password) => {
//   return signInWithEmailAndPassword(auth, email, password);
// });

// Cypress.Commands.add('logout', () => {
//   return signOut();
// });
