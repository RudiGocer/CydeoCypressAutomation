/// <reference types="cypress" />

describe('Context: My First Test', () => {
    before(() => {
        // runs once before all test cases in this describe block, like before class in TestNG
    })
    beforeEach(() => {
        //runs before each test case, beforeMethod in TestNG
        cy.clearCookies();
    })
    after(()=> {
        //similar to AfterClass in TestNG, runs once after all tests finished.
    })
    afterEach(() => {
        //similar to afterMethod in TestNG
    })

    it('Opening a we application', () => {
        cy.visit('/registration_form');
        
    })
})