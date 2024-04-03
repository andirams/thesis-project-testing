import {
    Step
} from '../helper/step.cy';

const step = new Step();

describe('Home Page', () => {
    beforeEach(() => {
        cy.viewport(1920, 1080);
        // mengunjungi url login
        cy.visit('/');
    });

    // //// ERROR LazyLoad
    // it('TCHP-01 - Load more berita #TERBARU', () => {
    //     // memanggil step loadMoreBeritaHome dari file step.cy.js
    //     step.loadMoreBeritaHome();
    //     // const date = new Date();
    //     // cy.clock(date)
    //     // cy.log(date)
    // });

    it('TCHP-01 - Search news with correct input', () => {
        // memanggil step searchNewsWithCorrectInput dari file step.cy.js
        step.searchNewsWithCorrectInput();
    });

    it('TCHP-02 - Search news with random input', () => {
        // memanggil step searchNewsWithRandomInput dari file step.cy.js
        step.searchNewsWithRandomInput();
    });

    // it('TCHP-03 - Search news with number input only', () => {
    //     // memanggil step searchNewsWithNumberInput dari file step.cy.js
    //     step.searchNewsWithNumberInput();
    // });


});