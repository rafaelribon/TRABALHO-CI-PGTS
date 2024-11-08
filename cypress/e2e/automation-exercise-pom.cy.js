
/// <reference types="cypress" />


import cadastro  from '../pages/cadastro'
import login  from '../pages/login'
import contato from '../pages/contato'
import produto from '../pages/produto'
import pagamento from '../pages/pagamento'
import checkout from '../pages/checkout'
import subscricao from '../pages/subscricao'
import menu from '../pages/menu';
import carrinho from '../pages/carrinho'
import { faker } from '@faker-js/faker' 


describe('Automation Exercise', () => {

    beforeEach(()=> {
        cy.visit('https://automationexercise.com');

    })

  

  it('Test Case 1: Cadastrar um usuário', () => {
    const email = faker.internet.email();
    cadastro.preencherFormulario(email)
    cadastro.verificarSeCadastroFoiIncluido()
    menu.irParaDeletarConta()

  });

  it('Test Case 2: Login User with correct email and password', () => {
    const email = faker.internet.email();
    cadastro.preencherFormulario(email)
    menu.irParaLogout()
    menu.irParaSignupLogin()
    login.preencherLogin(email,'12345')
    cadastro.verificarSeCadastroFoiIncluido()


  });

  it('Test Case 3: Login User with incorrect email and password', () => {
    menu.irParaSignupLogin()
    login.preencherLogin(faker.internet.email(),'54321')
    login.verificaMensagem('Your email or password is incorrect!')
  });

  
  it('Test Case 4: Logout User', () => {
    const email = faker.internet.email();
    cadastro.preencherFormulario(email)
    menu.irParaLogout()
    menu.irParaSignupLogin()
    login.preencherLogin(email,'12345')
    login.contemNomeUsuario()
    menu.irParaLogout()

  });


  it('Test Case 5: Register User with existing email', () => {
    menu.irParaSignupLogin()
    cadastro.iniciarCadastro(`tester-1721346302730@mail.com`)
    cadastro.verificarSeEmailjaFoiUtilizado('Email Address already exist!')
   
  });

  
  it('Test Case 6: Contact Us Form', () => {
    menu.irParaContato()
    contato.preencherContato('Tester','tester-qa@mail.com',
      'Test Automation','Learning Test Automation')
    contato.validarMensagemRetorno('Success! Your details have been submitted successfully.')

  });


  it('Test Case 8: Verify All Products and product detail page', () => {

    menu.irParaProdutos()
    produto.urlContemProdutcs()
    produto.contemAllProduct()
    produto.viewProduct()
    cy.get('.product-information > h2').should('be.visible')
    cy.get('.product-information p').should('be.visible').and('have.length', 4)
    cy.get('.product-information span span').should('be.visible')
   
  });

  it('Test Case 9: Search Product', () => {

    menu.irParaProdutos()
    produto.urlContemProdutcs()
    produto.contemAllProduct()
    produto.procurarProdutoAdiconar('Shirt')
    cy.get('.single-products')
      .should('be.visible')
      .and('have.length.at.least', 1)

  });

  it('Test Case 10: Verify Subscription in home page', () => {

    subscricao.preencherSubscricao(faker.internet.email())
    subscricao.verificarSeSubscricaoFoiEnviada('You have been successfully subscribed!')

  });

  it('Test Case 15: Place Order: Register before Checkout', () => {
    
    cadastro.preencherFormulario(faker.internet.email());
    carrinho.adicionarProdutoCarriho()
    carrinho.visualizarCarrinho()
    checkout.realizarCheckout()
    checkout.verificarDetalhesEndereco()
    checkout.preencherComentarios('teste')
    checkout.finalizarCheckout()
    pagamento.preencherDadosCartao(faker.person.fullName(),
      faker.finance.creditCardNumber(),faker.finance.creditCardCVV())
    menu.irParaDeletarConta()
    


  });
});
