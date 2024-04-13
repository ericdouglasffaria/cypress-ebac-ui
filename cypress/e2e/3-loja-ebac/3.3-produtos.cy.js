/// <reference types="cypress"/>

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        cy.visit('produtos/')
    });

    it('Deve selecionar um produtos na lista', () => {
        cy.get('.products > .row').contains('Frankie Sweatshirt').click()
        cy.get
    });
});