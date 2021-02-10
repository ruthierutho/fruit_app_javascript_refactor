describe('App', () => {
    beforeEach(() => {
        cy.visit('/', () => {
            console.log("App loaded");
        })
    })

    it('should show selected fruit on clicking fruit in list', () => {
        cy.get('li:first').click({shiftKey: true})
        cy.get('#fruit-title').contains('Apples')
    })
    
});