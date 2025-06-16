///import { describe } from "mocha"

/// <reference types="cypress"/>

describe('Funcionalidade: Login', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Deve fazer login com sucesso', () => {
        cy.get('#username').type('jacksonfreitas@teste.com')
        cy.get('#password').type('jackson12345')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, jacksonfreitas (não é jacksonfreitas? Sair)')

    })

    it('Deve exibir mensagem de erro ao inserir usuario inválido', () => {
        cy.get('#username').type('jacksfreitas@teste.com')
        cy.get('#password').type('jackson12345')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('exist')

    });

    it('Deve exibir mensagem de erro ao inserir senha inválida', () => {
       cy.get('#username').type('jacksonfreitas@teste.com')
       cy.get('#password').type('12345')
       cy.get('.woocommerce-form > .button').click()
       cy.get('.woocommerce-error').should('contain', 'A senha fornecida para o e-mail jacksonfreitas@teste.com está incorreta')
       cy.get('.woocommerce-error').should('exist')
    
    });


})
