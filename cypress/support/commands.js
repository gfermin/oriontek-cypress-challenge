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

import dayjs from "dayjs";

//Dynamic text with current date and time
Cypress.Commands.add("textWithDateTime", () => {
    return `Test executed at ${dayjs().format("DD/MM/YYYY HH:mm:ss")}`;
})

//Get the iframe body by selector
Cypress.Commands.add("getIframeBody", iframeSelector => {
    return cy
        .get(iframeSelector)
        .its("0.contentDocument.body")
        .should("not.be.empty")
        .then(cy.wrap)
})