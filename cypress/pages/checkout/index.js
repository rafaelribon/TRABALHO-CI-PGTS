class Checkout {

    verificarDetalhesEndereco() {

        cy.get('.heading').first().should('have.text', 'Address Details')
        cy.get('.heading').last().should('have.text', 'Review Your Order')
    }

    preencherComentarios(texto){
        cy.get('.form-control').type(texto)
    }


    finalizarCheckout(){
        cy.get('.btn-default.check_out').click()

    }

    realizarCheckout() {
        cy.get('.btn-default.check_out').should('be.visible')
        cy.get('.btn-default.check_out').click()
    }



}

export  default new Checkout()