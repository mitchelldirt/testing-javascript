describe('anonymous calculator', () => {
  it('can make calculations', () => {
    cy.visit('/')

    cy.findByText(/^1$/).click()

    cy.findByText(/^\+$/).click()

    cy.findByText(/^2$/).click()

    cy.findByText(/^=$/).click()

    cy.findByTestId('total').should('have.text', '3')
  })
})

describe('authenticated calculator', () => {
  it('displays the username', () => {
    cy.loginAsNewUser().then(user => {
      cy.visit('/')
      cy.assertLoggedInAs(user)
    })
  })
})
