import 'cypress-file-upload';
import "@cypress-audit/lighthouse/commands";
import 'cypress-mailosaur';
import 'cypress-plugin-snapshots/commands';

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
Cypress.Commands.add("goToPage", (url1)=>{
    cy.visit(url1)
});
Cypress.Commands.add('login', (email, password) => {
    cy.xpath('//*[@class="form-control form-control-lg ng-untouched ng-pristine ng-invalid" and @formcontrolname="email"]').type(email);
    cy.xpath('//*[@class="form-control form-control-lg ng-untouched ng-pristine ng-invalid" and @formcontrolname="password"]').type(password);
    cy.xpath('//*[@class="btn btn-lg btn-primary pull-xs-right"]').click();
});

//require('cypress-delete-downloads-folder').deleteDownloadsFolder();
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
