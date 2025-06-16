///import { describe } from "mocha"

/// <reference types="cypress"/>

describe('Funcionalidade: Login', () => {

    it('Deve fazer login com sucesso', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('jacksonfreitas@teste.com')
        cy.get('#password').type('jackson12345')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, jacksonfreitas (não é jacksonfreitas? Sair)')

    })

})
