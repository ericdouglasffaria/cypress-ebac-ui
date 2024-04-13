/// <reference types="cypress"/>
const perfil = require('../../fixtures/perfil.json')

describe('Funcionalidade: Login', () => {

    beforeEach(() => {
        cy.visit("minha-conta/") 
    });

    afterEach(() => {
        cy.screenshot()
    }); 
    // Verificando login
    it('Acessar a página de Login', () => {
        cy.get('#username').type("ericdouglasffaria@hotmail.com.br")
        cy.get('#password').type("0123456")
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should("contain","Olá, ericdouglasffaria (não é ericdouglasffaria?")
    });

    // Verificando mensagem de erro usuário invalido
    it('Deve exibir uma mensagame de erro ao inserir Usuário Invalido', () => {

        cy.get('#username').type("ericdouglas@hotmail.com.br")
        cy.get('#password').type("01032016")
        cy.get('.woocommerce-form > .button').click()

        //Validando mensagem de erro.
        cy.get('.woocommerce-error').should("contain","Endereço de e-mail desconhecido")
        cy.get('.woocommerce-error').should("exist")
    });

        // Verificando mensagem de erro senha invalido
    it('Deve exibir uma mensagame de erro ao inserir senha Invalido', () => {

        cy.get('#username').type("ericdouglasffaria@hotmail.com.br")
        cy.get('#password').type("012364")
        cy.get('.woocommerce-form > .button').click()

        //Validando da mensagem de erro.
        cy.get('.woocommerce-error').should("contain","Erro: A senha fornecida para o e-mail ericdouglasffaria@hotmail.com.br está incorreta.")
        cy.get('.woocommerce-error').should("exist")
    });
        //Validando login usando massa de dados
    it('Deve fazer o login com sucesso realizando massa de dados.', () => {
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should("contain","Olá, ericdouglasffaria (não é ericdouglasffaria?")
    });
        //Validando login Usando - Usando Fixture
    it('Deve fazer o login com sucesso - Ussando Fixture.', () => {
        cy.fixture('perfil').then(dados => {
            cy.get('#username').type(dados.usuario, {log:false})
            cy.get('#password').type(dados.senha,{log:false})
            cy.get('.woocommerce-form > .button').click()
            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should("contain","Olá, ericdouglasffaria (não é ericdouglasffaria?")
        });
    });
        //Validando login Usando - Usando Comando Customizados
    it.only('Deve fazer login com sucesso - Usando Comandos Customizados', () => {
        cy.login('ericdouglasffaria@hotmail.com.br', '0123456')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should("contain","Olá, ericdouglasffaria (não é ericdouglasffaria?")
    });
});