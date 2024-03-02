describe("Landing", () => {
    beforeEach(() => {
        cy.visit('localhost:3000/landing')
    })

    it("scrolling",() =>{
        cy.getByItem('movie-item').scrollIntoView({
            duration: 3000,
            easing: "linear",
            timeout: 3000,
        })
        cy.getByItem('button-detail').first().click()
    })

    it("If Link Passes", () => {
        const navigate = ["/", "/landing" ,"/movie", "/about"]
        cy.get("navbar").find("a").should("exist").each( ($inspect, i) => {
            cy.wrap($inspect)
            .should("have.attr", "href", navigate[i])
        })
    })

    it("If Contain Passes", () => {
        cy.get("hero-item").find("h1").contains("Welcome to FilmKu.com")
        cy.get("hero-item").find("p").contains("Find YourFavorite Movie!")
    })

    it("To footer", () => {
        cy.scrollTo("bottom")
    })
})