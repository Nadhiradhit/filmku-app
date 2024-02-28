describe('To Check Link', () => {
    beforeEach(() => {
        cy.visit('localhost:3000/movie')
    })

    it("Go to movie page", () => {
        cy.get('[data-item="navbar"]').contains("Movies").click
    })
    
})