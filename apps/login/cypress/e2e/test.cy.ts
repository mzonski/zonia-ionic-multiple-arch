describe('My First Test', () => {
  it('Visits the app root remoteUrl', () => {
    cy.visit('/')
    cy.contains('#container', 'Ready to create an app?')
  })
})
