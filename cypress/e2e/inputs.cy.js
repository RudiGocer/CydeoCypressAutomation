/// <reference types="cypress" />

describe('Input Forms Test', () => {
    
    beforeEach('Navigate to registration page', () => {
         cy.clearCookies();
         cy.visit('/registration_form')
    })
    

    it('Check different input box fields and verify', () => {
           //fill the form with username and other info
          cy.get('input[name="firstname"]').type('Mike');
          cy.get('input[name="lastname"]').type('Brown');
          cy.get('input[name="username"]').type('CrazyHeart');
          /**
           * 
           */
            let email = `formtest${Math.floor(100000+Math.random()*900000)}@cydeo.com`;
          cy.get('input[name="email"]').type(email);



    });
    
});