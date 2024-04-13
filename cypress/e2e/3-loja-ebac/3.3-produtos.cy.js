/// <reference types="cypress"/>
import produtosPage from "../../support/page-objects/produtos.page";

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        produtosPage.visitarUrl()
    });

    it.only('Deve selecionar um produtos na lista com Sucesso', () => {
        produtosPage.buscarProdutoNaLista('Beaumont Summit Kit')
    });

    // Buscar Produto sem variavel.
    it('Deve buscar um produto com sucesso - Sem Variável', () => {
        produtosPage.buscarProduto('Electra Bra Top')
        cy.get('.product_title').should('contain', 'Electra Bra Top')
    });

    // Buscar Produto com variavel.
    it('Deve buscar um produto com sucesso - Com Variável', () => {
        let produto = 'Electra Bra Top'
        produtosPage.buscarProduto(produto)
        cy.get('.product_title').should('contain', produto)
    });

    it('Deve visitar a página de produtos com Sucesso', () => {
        produtosPage.visitarProduto('')
    });
    
    it('Deve Adicionar um produto no carrimho', () => {
        produtosPage.addProdutoCarrinho('')
        
    });
});