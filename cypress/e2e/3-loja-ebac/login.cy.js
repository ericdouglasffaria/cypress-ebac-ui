///<reference types="cypress"/>

describe("Funcionalidade: Login.", () => {
    it("Deve realizar o login com sucesso", () => {
        cy.visit("http://lojaebac.ebaconline.art.br/minha-conta/")
        cy.get('#username').type("ericdouglasffaria@hotmail.com.br")
        cy.get('#password').type("01032016")
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should("contain","Olá, ericdouglasffaria (não é ericdouglasffaria? Sair)")
    })
})
