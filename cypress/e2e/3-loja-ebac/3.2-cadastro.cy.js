/// <reference types="cypress"/>
import { faker } from '@faker-js/faker';

describe('Funcionalidade: Cadastro', () => {

    beforeEach(() => {
        cy.visit("http://lojaebac.ebaconline.art.br/minha-conta/")
    });

    it('Deve completar um Cadastro Com Sucesso.', () => {
        cy.get('#reg_email').type(faker.internet.email())
        cy.get('#reg_password').type("123456")
        cy.get(':nth-child(4) > .button').click()

        //Validando Casdastro com sucesso.
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should("exist")

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(faker.person.firstName())
        cy.get('#account_last_name').type(faker.person.lastName())
        cy.get('.woocommerce-Button').click()

        //Validando Casdastro com sucesso.
        cy.get('.woocommerce-message').should("contain","Detalhes da conta modificados com sucesso.")
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should("exist")
    });

    it('Deve completar um Cadastro Com Sucesso.Usando Variaveis', () => {

        //Criando Variaveis para Cadastro.
        let nome = faker.person.firstName()
        let email = faker.internet.email(nome)
        let sobrenome = faker.person.lastName()

        //Criando Registro.
        cy.get('#reg_email').type(email)
        cy.get('#reg_password').type("123456")
        cy.get(':nth-child(4) > .button').click()
        //Validando Casdastro com sucesso.
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should("exist")

        //Atualizando Cadastro.
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(nome)
        cy.get('#account_last_name').type(sobrenome)
        cy.get('.woocommerce-Button').click()
        //Validando Atualização de Casdastro.
        cy.get('.woocommerce-message').should("contain","Detalhes da conta modificados com sucesso.")
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should("exist")
    });
});