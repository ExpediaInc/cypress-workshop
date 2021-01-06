import './commands';
import { configure } from '@testing-library/cypress';

configure({ testIdAttribute: 'data-stid' });

before('Prevent "Sign In" Popup', () => {
    cy.setCookie('NavActions', 'acctWasOpened');
});

Cypress.Cookies.defaults({
    preserve: ['NavActions']
});

mocha.bail();
