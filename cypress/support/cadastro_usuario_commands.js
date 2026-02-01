Cypress.Commands.add('preencheNome', (name) => {
    cy.get('#user').type(name)
})

Cypress.Commands.add('preencheEmail', (email) => {
    cy.get('#email').type(email)
})

Cypress.Commands.add('preencheSenha', (senha) => {
    cy.get('#password').type(senha)
})

Cypress.Commands.add('btnCadastro', () => {
    cy.get('#btnRegister').click()
})

Cypress.Commands.add('validaCadastroSucesso', (name) => {
    cy.get('.swal2-success-ring')
        .should('be.visible')
    cy.get('#swal2-title')
        .should('contain', 'Cadastro realizado!')
    cy.get('#swal2-html-container')
        .should('have.text', `Bem-vindo ${name}`)
})

Cypress.Commands.add('validaErroCadastro', (mensagem) => {
    cy.get('#errorMessageFirstName')
        .should('be.visible')
        .should('have.text', mensagem)
})

Cypress.Commands.add('fluxoCadastroSucesso', (name, email, password) => {
    cy.preencheNome(name);
    cy.preencheEmail(email)
    cy.preencheSenha(password)
    cy.btnCadastro()
    cy.validaCadastroSucesso(name)
})
