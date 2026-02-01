/// <reference types="cypress"/>
import { faker } from '@faker-js/faker';

describe('Login de Usuário', () => {

    const tamanhosTela = ['samsung-s10', 'iphone-x', 'ipad-2', 'macbook-16']

    tamanhosTela.forEach(tamanho => {

        let email = faker.internet.email()

        beforeEach(() => {
            cy.viewport(tamanho)
            cy.visit('/login');
        });

        it(`Login com sucesso - ${tamanho}`, () => {
            cy.preencheEmailLogin(email)
            cy.preencheSenha(faker.internet.password({ length: 6 }))
            cy.btnLogin()
            cy.validaLoginSucesso(email)
        });

        it(`Tentativa de login e-mail vazio - ${tamanho}`, () => {
            cy.preencheSenha(faker.internet.password({ length: 6 }))
            cy.btnLogin()
            cy.validaErroLogin('E-mail inválido.')
        });

        it(`Tentativa de login senha vazia - ${tamanho}`, () => {
            cy.preencheEmailLogin(email)
            cy.btnLogin()
            cy.validaErroLogin('Senha inválida.')
        });

        it(`Tentativa de login senha invalida - ${tamanho}`, () => {
            cy.preencheEmailLogin(email)
            cy.preencheSenha(faker.internet.password({ length: 3 }))
            cy.btnLogin()
            cy.validaErroLogin('Senha inválida.')
        });
    })
});