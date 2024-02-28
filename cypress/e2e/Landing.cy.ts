describe("Landing", () => {
    beforeEach(() => {
        cy.visit('localhost:3000/landing')
    })

    it("scrolling",() =>{
        cy.get('[data-item="movie-item"]').scrollIntoView({
            duration: 3000,
            easing: "linear",
            timeout: 3000,
        })
        cy.get('[data-item="button-detail"]').first().click()
    })

    it("If Link Passes", () => {
        const navigate = ["/", "/landing" ,"/movie", "/about"]
        cy.get("[data-item='navbar']").find("a").should("exist").each( ($inspect, i) => {
            cy.wrap($inspect)
            .should("have.attr", "target", "_blank")
            .and("have.attr", "href", navigate[i])
        })
    })

    it("If Contain Passes", () => {
        cy.get("[data-item='hero-item']").find("h1").contains("Welcome to FilmKu.com")
        cy.get("[data-item='hero-item']").find("p").contains("Find YourFavorite Movie!")
    })

    it("To footer", () => {
        cy.scrollTo("bottom")
    })
})