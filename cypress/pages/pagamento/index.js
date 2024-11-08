class Pagamento {

    preencherDadosCartao(nomeCompleto,numeroCartao,CVV) {
        cy.get('[data-qa="name-on-card"]').type(nomeCompleto)
        cy.get('[data-qa="card-number"]').type(numeroCartao)
        cy.get('[data-qa="cvc"]').type(CVV)
        cy.get('[data-qa="expiry-month"]').type(12)
        cy.get('[data-qa="expiry-year"]').type(2035)
        cy.get('[data-qa="pay-button"]').click()
        cy.get('[data-qa="order-placed"]').should('be.visible')
    }
    
}



export default new Pagamento 