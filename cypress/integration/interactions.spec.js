/// <reference types="Cypress" />
alert(Cypress.env('MY_ENV_VARIABLE'));
describe('Basic page interactions', () => {
    beforeEach(()=>{
        cy.visit('/example-4');
    });

    // test case for double click element
    it('sets the header text to the item\'s name when double clicked', () =>{
        cy.get('[data-cy=box-1-items-list] > :nth-child(2)')
            .dblclick();

        cy.get('[data-cy=box-1-selected-name]')
            .invoke('text')
            .should('equal', 'Option Two');
    });

    // test case for checkbox element
    it('displays the correct count for the number of selected checkboxes', () => {
        cy.get('[data-cy=box-2-checkboxes] > :nth-child(1) input')
            .check();

        cy.get('[data-cy=box-2-selected-count]')
            .invoke('text')
            .should('equal', '1');
    });

    // test case for dropdown element
    it('displays the name of the currently selected item', () => {
        cy.get('[data-cy=box-3-dropdown]')
            .select('Option Three');

        cy.get('[data-cy=box-3-selected-name]')
            .invoke('text')
            .should('equal', 'Option Three');
    });

    it('should display the name of the most recently hovered item', () => {
        cy.get('[data-cy=box-4-items-list]')
            .trigger('mouseover')
            .debug();
            /*.then(()=>{
                debugger;
            });*/
            //.trigger('mouseover', 10, 20); // specifying the coordinates

        cy.get('[data-cy=box-4-selected-name]')
            .invoke('text')
            .should('equal', 'Option Two');
    });
})