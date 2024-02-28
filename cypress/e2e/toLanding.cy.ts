describe('to landing', () => {
  
  it('passes dashboard', () => {
    cy.visit('localhost:3000')
    cy.contains('To Dashboard').click()
  })

  it('passes landing', () => {
    cy.visit('localhost:3000/landing')
  })
  
})