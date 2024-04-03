import {
    Step
} from '../helper/step.cy';

const step = new Step();

describe('Login CMS', () => {
    beforeEach(() => {
        cy.viewport(1920, 1080);
        // mengunjungi url login
        cy.visit('/');
    });

    it('TCCMS-01 - Input correct username and correct password', () => {
        // memanggil step loginWithValidCredentials dari file step.cy.js
        step.loginWithValidCredentials();
    });

    // it('TCCMS-02 - Input correct username and incorrect password', () => {
    //     // memanggil step loginWithIncorrectPassword dari file step.cy.js
    //     step.loginWithIncorrectPassword();
    // });

    // it('TCCMS-03 - Input incorrect username and correct password', () => {
    //     // memanggil step loginWithWrongUsername dari file step.cy.js
    //     step.loginWithIncorrectUsername();
    // });

    // it('TCCMS-04 - Input incorrect username and incorrect password', () => {
    //     // memanggil step loginWithInvalidCredentials dari file step.cy.js
    //     step.loginWithInvalidCredentials();
    // });

    // it('TCCMS-05 - Logout from the account', () => {
    //     // memanggil step logoutFromTheAccount dari file step.cy.js
    //     step.logoutFromTheAccount();
    // });

});