describe('template spec', () => {
  it('passes', () => {
    cy.visit('localhost:3000')
  })
  it('to landing', () => {
    cy.visit('localhost:3000/landing')
  })
  
})