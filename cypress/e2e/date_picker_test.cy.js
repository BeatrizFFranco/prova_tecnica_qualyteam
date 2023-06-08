import { endPointDatePicker } from '../../src/endpoints.js';

import {
    diaAtualSemZero,
    nomeMesAnterior,
    anoAtual,
    dataAtualFormatado,
    dataAtualMesAnterior,
    diaNascimento,
    mesNascimento,
    anoNascimento,
    dataNascimento,
} from '../../src/datas.js';

describe('Verificar se ele está vindo com a data atual', () => {
    it('should visit', () => {
        cy.visit(endPointDatePicker);

        cy.get('.datetimepicker-dummy-input')
            .invoke('val')
            .then(($value) => {
                expect($value).to.equal(dataAtualFormatado);
            });
    });
});

describe('Limpar datepicker e trazer data atual através de atalho', () => {
    it('should visit', () => {
        cy.visit(endPointDatePicker);

        cy.get('.datetimepicker-dummy-input')
            .click()
            .should('be.visible');

        cy.get('.datetimepicker-clear-button')
            .click()
            .should('be.visible');

        cy.get('.datetimepicker-dummy-input')
            .click()
            .should('be.visible');

        cy.contains('button', 'Today')
            .click();

        cy.get('.datetimepicker-dummy-input')
            .invoke('val')
            .then(($value) => {
                expect($value).to.equal(dataAtualFormatado);
            });

    })
})

describe('Colocar a data do seu aniversário', () => {
    it('should visit', () => {
        cy.visit(endPointDatePicker);

        cy.get('.datetimepicker-dummy-input')
            .click()
            .should('be.visible');

        cy.get('.datepicker-nav-year')
            .click()
            .should('be.visible');

        cy.contains(anoNascimento)
            .click();

        cy.get('.datepicker-nav-month')
            .click()
            .should('be.visible');

        cy.contains(mesNascimento)
            .click();

        cy.get('.date-item')
            .should('be.visible');

        cy.contains('button', diaNascimento)
            .click();

        cy.get('.datetimepicker-dummy-input')
            .invoke('val')
            .then(($value) => {
                expect($value).to.equal(dataNascimento);
            });
    });
});

describe('Colocar o dia atual no mês anterior', () => {
    it('should visit', () => {
        cy.visit(endPointDatePicker);

        cy.get('.datetimepicker-dummy-input')
            .click()
            .should('be.visible');

        cy.get('.datepicker-nav-year')
            .click()
            .should('be.visible');

        cy.contains(anoAtual)
            .click();

        cy.get('.datepicker-nav-month')
            .click()
            .should('be.visible');

        cy.contains(nomeMesAnterior)
            .click();

        cy.get('.date-item')
            .should('be.visible');

        cy.contains('button', diaAtualSemZero)
            .click()

        cy.get('.datetimepicker-dummy-input')
            .invoke('val')
            .then(($value) => {
                expect($value).to.equal(dataAtualMesAnterior);
            });
    })
});