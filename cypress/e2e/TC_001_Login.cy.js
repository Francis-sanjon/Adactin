const { When, Given, And, Then } = require("@badeball/cypress-cucumber-preprocessor")
const { default: Login } = require("./PageObjects/Login.spec")

const lp = new Login();
let i = 0;

describe('', () => {

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
  When('User enters invalid Username and valid password', () => {
    cy.fixture('xlsxData').then((data) => {
      lp.userName(data.rows[i].Invalid_username)
      lp.password(data.rows[i].password)
    })
  })
  Then('User unable to Adactin Homepage', () => {
    cy.title().should('not.eq', 'Adactin.com - Search Hotel')
  })
  When('User enters valid Username and invalid password', () => {
    cy.fixture('xlsxData').then((data) => {
      lp.userName(data.rows[i].username)
      lp.password(data.rows[i].Invalid_password)
    })
  })
  When('User enters invalid Username and invalid password', () => {
    cy.fixture('xlsxData').then((data) => {
      lp.userName(data.rows[i].Invalid_username)
      lp.password(data.rows[i].Invalid_password)
    })

  })
})