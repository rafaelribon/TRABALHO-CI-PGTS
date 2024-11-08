class Carrinho {

    adicionarProdutoCarriho() {
        cy.contains("Add to cart").click()
        

    }

    visualizarCarrinho() {
        cy.contains("View Cart").click()

    }


}
export default new Carrinho