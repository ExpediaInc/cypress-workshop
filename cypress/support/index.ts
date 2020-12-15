import './commands';

before('Prevent "Sign In" Popup', () => {
    cy.setCookie('NavActions', 'acctWasOpened');
});

Cypress.Cookies.defaults({
    preserve: ['NavActions']
});

mocha.bail();
