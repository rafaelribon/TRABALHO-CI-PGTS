class Login {
    preencherLogin(usuario,senha) {
            cy.get('[data-qa="login-email"]').type(usuario)
    cy.get('[data-qa="login-password"]').type(senha, { log: false })

    cy.get('[data-qa="login-button"]').click()
    }


  

    contemNomeUsuario() {
        cy.get('i.fa-user').parent().should('contain', 'Tester QA')

    }

    verificaMensagem(mensagem){
        cy.get(`.login-form form p`).should('contain',  mensagem)
    }
}

export default new Login()