class Subscricao {

    preencherSubscricao(email) {

        cy.get('input#susbscribe_email')
        .scrollIntoView()
        .type(email)
      cy.get('button#subscribe').click()


    }

    verificarSeSubscricaoFoiEnviada(mensagem) {
        cy.contains(mensagem).should('be.visible')


    }
}

export default new Subscricao 