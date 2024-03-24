/// <reference types="cypress"/>

describe('Funcionalidade: Login', () => {

    beforeEach(() => {
        cy.visit("http://lojaebac.ebaconline.art.br/minha-conta/") 
    });

    afterEach(() => {
        cy.screenshot()
    }); 

    it('Acessar a página de Login', () => {

        cy.get('#username').type("ericdouglasffaria@hotmail.com.br")
        cy.get('#password').type("01032016")
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should("contain","Olá, ericdouglasffaria (não é ericdouglasffaria?")
    });

    it('Deve exibir uma mensagame de erro ao inserir Usuário Invalido', () => {

        cy.get('#username').type("ericdouglas@hotmail.com.br")
        cy.get('#password').type("01032016")
        cy.get('.woocommerce-form > .button').click()

        //Validando mensagem de erro.
        cy.get('.woocommerce-error').should("contain","Endereço de e-mail desconhecido")
        cy.get('.woocommerce-error').should("exist")
    });

    it('Deve exibir uma mensagame de erro ao inserir senha Invalido', () => {

        cy.get('#username').type("ericdouglasffaria@hotmail.com.br")
        cy.get('#password').type("012364")
        cy.get('.woocommerce-form > .button').click()

        //Validando da mensagem de erro.
        cy.get('.woocommerce-error').should("contain","Erro: A senha fornecida para o e-mail ericdouglasffaria@hotmail.com.br está incorreta.")
        cy.get('.woocommerce-error').should("exist")
    });
});