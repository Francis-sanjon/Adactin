const { Given, When, And, Then } = require("@badeball/cypress-cucumber-preprocessor");

import Cancel from './PageObjects/Cancel.spec';
import Login from './PageObjects/Login.spec'
const lp = new Login();
const c = new Cancel();

describe('Canceling bookings', () => {

    When('User navigate to Booked iteration page', () => {
        c.bIteration()
    })
    And('User verifying the cancelation page', () => {
        cy.title().should('eq', 'Adactin.com - Select Hotel')
    })
    And('User deselect all booked', () => {
        c.checkBtn().check()
    })
    Then('User clicks cancel booked', () => {
        c.cancelBk()
    })

})
