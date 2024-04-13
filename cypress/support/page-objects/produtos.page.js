class ProdutosPage {

    visitarUrl() {
        cy.visit('produtos/')
    }

    buscarProdutoNaLista(nomeProduto) {
        cy.get('.products > .row').contains(nomeProduto).click()
    }

    buscarProduto(nomeProduto) {
        cy.get('[name="s"]').eq(1).type(nomeProduto)
        cy.get('.button-search').eq(1).click()
    }

    visitarProduto(){
    }

    addProdutoCarrinho(){
    }
}
export default new ProdutosPage()