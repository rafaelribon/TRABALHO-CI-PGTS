class Produto  {

     urlContemProdutcs() {
        cy.url().should('contain', 'products')

     }

     contemAllProduct() {

        cy.get('.title').should('be.visible').and('contain', 'All Products')

     }


     procurarProdutoAdiconar(nomeProduto) {
        cy.get('input#search_product').type(nomeProduto)
        // cy.get('input#search_product').type('Shirt')
    cy.get('button#submit_search').click()

    cy.get('.title').should('be.visible').and('contain', 'Searched Products')
     }



     viewProduct(){
      cy.get('.single-products')
      .should('be.visible')
      .and('have.length.at.least', 1)
      .first()
      .parent()
      .contains('View Product')
      .click()
     }


    




}

export default new Produto