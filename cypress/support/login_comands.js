Cypress.Commands.add('preencheEmailLogin', (email) => {
    cy.get('#user').type(email)
})

Cypress.Commands.add('btnLogin', () => {
    cy.get('#btnLogin').click()
})

Cypress.Commands.add('validaLoginSucesso', (email) => {
    cy.get('#swal2-html-container')
        .should('be.visible')
        .should('have.text', `Olá, ${email}`)
})

Cypress.Commands.add('validaErroLogin', (mensagem) => {
    cy.get('.invalid_input')
        .should('be.visible')
        .should('have.text', mensagem)
})