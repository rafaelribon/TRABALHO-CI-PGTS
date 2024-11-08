class Menu {
    irParaProdutos() {
        cy.contains('Products').click()
    }

    irParaContato() {
        cy.contains('Contact us').click()
        cy.get(`.contact-form h2`)
      .should('be.visible')
      .and('have.text', 'Get In Touch')
    }

    irParaDeletarConta() {
        cy.get('[href *="delete"]').click()
        cy.get('b').should('contain', 'Account Deleted!')
        cy.get('[data-qa="continue-button"]').click()


    }

    irParaSignupLogin() {
        cy.contains('Signup').click()
    }

    irParaLogout(){
        cy.contains('Logout').click()
        cy.url().should('contain', 'login')
        cy.contains("Login to your account").should("be.visible");
    }


}

export default new  Menu