const { When, Given, And, Then } = require("@badeball/cypress-cucumber-preprocessor")
const { default: Login } = require("./PageObjects/Login.spec")

const lp = new Login();
let i = 0;

describe('Login', () => {

  Given('User launch the Adactin webpage', () => {
    cy.visit('https://adactinhotelapp.com/')

  })
  When('User enters valid Username and valid password', () => {
    cy.fixture('xlsxData').then((data) => {
      lp.userName(data.rows[i].username)
      lp.password(data.rows[i].password)
    })

  })
  And('User clicks Login button', () => {
    lp.loginButton()
  })
  Then('User able to Adactin Homepage', () => {
    cy.title().should('eq', 'Adactin.com - Search Hotel')
  })

})
describe('', () => {

  When('User enters invalid Username and valid password', () => {
    lp.userName(data.rows[i].username)
    lp.password('Francis*123')
  })
  Then('User unable to Adactin Homepage', () => {
    cy.title().should('eq', 'Adactin.com - Search Hotel')
  })
  When('User enters valid Username and invalid password', () => {
    lp.userName('Francis3535')
    lp.password('Francis*123')
  })
  When('User enters invalid Username and invalid password', () => {
    lp.userName('Francis3535')
    lp.password('Francis*123')
    //lp.password('Francis*123')
  })

})