describe('To Check Link', () => {
    beforeEach(() => {
        cy.visit('localhost:3000/about')
    })

    it("Go to about page", () => {
        cy.get('navbar').contains("About").click
        cy.visit("localhost:3000/about")
    })

    it("Scroll to about me", () => {
        cy.scrollTo("bottom")
    })
    
})