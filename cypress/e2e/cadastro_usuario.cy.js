/// <reference types="cypress"/>
import { faker } from '@faker-js/faker';

describe('Cadastro de Usuário', () => {

    beforeEach(() => {
        cy.visit('/register');
    });

    let name = faker.person.fullName()

    it('Cadastrar um novo usuário com sucesso', () => {
        cy.preencheNome(name);
        cy.preencheEmail(faker.internet.email())
        cy.preencheSenha(faker.internet.password({ length: 6 }))
        cy.btnCadastro()
        cy.validaCadastroSucesso(name)
    });

    it('Tentativa de cadastro de um novo usuário sem digitar o nome', () => {
        cy.preencheEmail(faker.internet.email())
        cy.preencheSenha(faker.internet.password({ length: 6 }))
        cy.btnCadastro()
        cy.validaErroCadastro('O campo nome deve ser prenchido')
    });

    it('Tentativa de cadastro de um novo usuário sem digitar o e-mail', () => {
        cy.preencheNome(name);
        cy.preencheSenha(faker.internet.password({ length: 6 }))
        cy.btnCadastro()
        cy.validaErroCadastro('O campo e-mail deve ser prenchido corretamente')
    });

    it('Tentativa de cadastro de um novo usuário sem digitar a senha', () => {
        cy.preencheNome(name);
        cy.preencheEmail(faker.internet.email())
        cy.btnCadastro()
        cy.validaErroCadastro('O campo senha deve ter pelo menos 6 dígitos')
    });

    it('Tentativa de cadastro de um novo usuário com e-mail inválido', () => {
        cy.preencheNome(name);
        cy.preencheEmail(faker.internet.password({ length: 12 }))
        cy.preencheSenha(faker.internet.password({ length: 6 }))
        cy.btnCadastro()
        cy.validaErroCadastro('O campo e-mail deve ser prenchido corretamente')
    });

    it('Tentativa de cadastro de um novo usuário com senha inválida  (<5 digitos)', () => {
        cy.preencheNome(name);
        cy.preencheEmail(faker.internet.email())
        cy.preencheSenha(faker.internet.password({ length: 3 }))
        cy.btnCadastro()
        cy.validaErroCadastro('O campo senha deve ter pelo menos 6 dígitos')
    });

});