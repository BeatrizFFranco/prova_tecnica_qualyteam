import {
  endPointLogin,
  endPointSecure
} from '../../src/endpoints.js';

import {
  nickId,
  passId,
  senhaIncorreta
} from '../../src/login.js';

describe('Teste de erro ao não informar nickname', () => {
  it('should visit', () => {
    cy.visit(endPointLogin);

    cy.get('#nickId')
      .clear()
      .should('have.value', '');

    cy.get('#nickId')
      .invoke('val')
      .then(($value) => {
        expect($value).to.equal('');
      });

    cy.get('#passId')
      .type('pwd123')
      .should('have.value', 'pwd123');

    cy.get('#passId')
      .invoke('val')
      .then(($value) => {
        expect($value).to.equal(passId);
      });

    cy.contains('button', 'Login')
      .click();

    cy.get('#flash')
      .contains('Ops! Informe seu nickname.')
      .should('be.visible');

  });
});

describe('Teste de erro ao não informar password', () => {
  it('should visit', () => {
    cy.visit(endPointLogin);

    cy.get('#nickId')
      .type('papitorocks')
      .should('have.value', 'papitorocks');

    cy.get('#nickId')
      .invoke('val')
      .then(($value) => {
        expect($value).to.equal(nickId);
      });

    cy.get('#passId')
      .clear()
      .should('have.value', '');

    cy.get('#passId')
      .invoke('val')
      .then(($value) => {
        expect($value).to.equal('');
      });

    cy.contains('button', 'Login')
      .click();

    cy.get('#flash')
      .contains('Ops! Informe sua senha secreta.')
      .should('be.visible');

  });
});

describe('Teste de erro ao informar nickname ou senha incorretos', () => {
  it('should visit', () => {
    cy.visit(endPointLogin);

    cy.get('#nickId')
      .type('papitorocks')
      .should('have.value', 'papitorocks');

    cy.get('#nickId')
      .invoke('val')
      .then(($value) => {
        expect($value).to.equal(nickId);
      });

    cy.get('#passId')
      .type('macacos456')
      .should('have.value', 'macacos456');

    cy.get('#passId')
      .invoke('val')
      .then(($value) => {
        expect($value).to.equal(senhaIncorreta);
      });

    cy.contains('button', 'Login')
      .click();

    cy.get('#flash')
      .contains('Oops! nickname e/ou senha incorretos :(')
      .should('be.visible');

  });
})

describe('Teste de Login com sucesso', () => {
  it('should visit', () => {
    cy.visit(endPointLogin);

    cy.get('#nickId')
      .type('papitorocks')
      .should('have.value', 'papitorocks');

    cy.get('#nickId')
      .invoke('val')
      .then(($value) => {
        expect($value).to.equal(nickId);
      });

    cy.get('#passId')
      .type('pwd123')
      .should('have.value', 'pwd123');

    cy.get('#passId')
      .invoke('val')
      .then(($value) => {
        expect($value).to.equal(passId);
      });

    cy.contains('button', 'Login')
      .click()
      .should('be.visible');

    it('should visit', () => {
      cy.visit(endPointSecure);
    })
  })
})

describe('Teste de mensagem de erro ao acessar URL de área logada diretamente', () => {
  it('should visit', () => {
    cy.visit(endPointSecure);

    cy.get('#flash')
      .should('be.visible')
      .contains('Você deve fazer o login para ver a área logada!')
      .and('be.visible');

  });
});

