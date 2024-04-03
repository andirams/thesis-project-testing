import {
    Step
} from '../helper/step.cy';

const step = new Step();

describe('Fokus Page', () => {
    beforeEach(() => {
        cy.viewport(1920, 1080);
        // mengunjungi url login
        cy.visit('/');
    });

    it('TCFKP-01 - Load more fokus berita hashtag', () => {
        // memanggil step loadMoreFokus dari file step.cy.js
        step.loadMoreFokus();
    });

    // it('TCFKP-02 - Opening the first hashtag of Fokus Berita', () => {
    //     // memanggil step openFirstHashtagFokus dari file step.cy.js
    //     step.openFirstHashtagFokus();
    // });

});