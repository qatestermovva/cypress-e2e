// Specifying group of tests
describe('Heading text', () => {
    it('contains the correct tile', () => {
        cy.visit('http://localhost:3000/example-1');
        cy.get('h1')
            .invoke('text')
            .should('equal', 'My Awesome Web Application')
    });
});