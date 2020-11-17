const url = '/Hotel-Search?adults=2&destination=Frankfurt%20%28and%20vicinity%29%2C%20Hessen%2C%20Germany&endDate=2020-12-03&regionId=179894&semdtl=&sort=RECOMMENDED&startDate=2020-12-01&theme=&useRewards=true&userIntent&x_pwa=1';

describe('Search Results Page', () => {
    before(() => {
        cy.visit(url);
    });

    describe('COVID Banner', () => {
        it('should display COVID-19 banner on page load', () => {
            cy.findByText('Germany may have travel restrictions in place due to COVID-19.')
                .should('be.visible');
        });

        it('can dismiss banner', () => {
            cy.findByRole('button', { name: /Dismiss/ })
                .click()
            cy.findByText('Germany may have travel restrictions in place due to COVID-19.')
                .should('not.exist');
        });
    });

    describe('Search Results', () => {
        it('should display COVID-19 banner on page load', () => {
            cy.get('section[data-stid="section-results"]')
                .should('be.visible');
        });
    });
});
