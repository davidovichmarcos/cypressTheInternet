/// <reference types="cypress"/>

beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/')
})
describe('testing the internet page', () => {
    it('click to add/remove elements', () => {
        cy.get('a').contains('Add/Remove Elements').click()
        cy.get('button').contains('Add Element').as('btnAdd').click().click()
        cy.get('[id=elements]').contains('Delete').click()
        cy.get('[id=elements]').should('have.length', 1)
    })

    it('basic auth', () => {
        cy.request({
            method: 'GET',
            url: 'basic_auth', 
            auth: {
                username: 'admin',
                password: 'admin'  
            }
          })
    })
    it('broken images', () => {
        cy.get('a').contains('Broken Images').click();
        // implement the img plugin
    })
})