import {buildUser} from '../support/generate'
describe('registration', () => {
  it('should register a new user', () => {
    const user = buildUser()
    cy.visit('/')
    cy.findByText(/register/i).click()
    cy.findByLabelText(/username/i).type(user.username)
    cy.findByLabelText(/password/i).type(user.password)
    cy.findByText(/submit/i).click()
    cy.assertHome()
    cy.assertLoggedInAs(user)
  })

  it(`should show an error message if there's an error registering`, () => {
    cy.intercept('POST', 'http://localhost:3000/register', {
      statusCode: 500,
      body: {},
    }).as('registerRequest')

    cy.visit('/register')
    cy.findByText(/submit/i)
      .click()
      .wait('@registerRequest')
    cy.findByText(/error.*try again/i)
  })
})
