```javascript
const url = 'https://www.expedia.com/Frankfurt-Hotels-Adina-Apartment-Hotel-Frankfurt-Neue-Oper.h2495897.Hotel-Information?chkin=2021-01-06&chkout=2021-01-08&destType=MARKET&destination=Frankfurt%20%28and%20vicinity%29%2C%20Hessen%2C%20Germany&neighborhoodId=6156285&pwa_ts=1609960654536&referrerUrl=aHR0cHM6Ly93d3cuZXhwZWRpYS5jb20vSG90ZWwtU2VhcmNo&regionId=179894&rfrr=HSR&rm1=a2&selectedRatePlan=242294258&selectedRoomType=351601&semdtl=&sort=RECOMMENDED&top_cur=USD&top_dp=123&useRewards=true&x_pwa=1'

describe('Search Results Page', () => {
    before(() => {
      cy.visit(url);
    });

    describe('"Shop with Points" toggle does not appear in logged out state', () => {
      it('displays VIP Access', () => {
        cy.findByText(/you deserve an upgrade. When you book a VIP Access stay/i)
          .should('not.exist');
        cy.findByRole('checkbox', { name: /Expedia points/i })
          .should('not.exist');
      });
      it('Click on the map and verify it opened', () => {
        cy.findByRole('button', { name: /Map/i })
          .click()
        cy.findByTestId('infosite-map')
      })
    });
});
```