import {
    Step
} from '../helper/step.cy';

const step = new Step();

describe('Ekoran Page', () => {
    beforeEach(() => {
        cy.viewport(1920, 1080);
        // mengunjungi url login
        cy.visit('/');
    });

    // it('TCEP-01 - Load more ekoran', () => {
    //     // memanggil step loadMoreEkoran dari file step.cy.js
    //     step.loadMoreEkoran();
    // });

    // it('TCEP-02 - Open latest ekoran', () => {
    //     // memanggil step openLatestEkoran dari file step.cy.js
    //     step.openLatestEkoran();
    // });

    it('TCEP-03 - Back to top button', () => {
        // memanggil step backToTopEkoran dari file step.cy.js
        step.backToTopEkoran();
    });

});