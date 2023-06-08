Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function () {
    cy.get('#nickId')
        .type('papitorocks');

    cy.get('#passId')
        .type('macacos456');

    cy.contains('button', 'Login')
        .click();
})