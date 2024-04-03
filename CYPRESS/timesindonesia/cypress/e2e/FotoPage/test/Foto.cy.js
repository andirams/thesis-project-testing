import {
    Step
} from '../helper/step.cy';

const step = new Step();

describe('Foto Page', () => {
    beforeEach(() => {
        cy.viewport(1920, 1080);
        // mengunjungi url login
        cy.visit('/');
    });

    // it('TCFP-01 - Load more foto', () => {
    //     // memanggil step loadMoreFoto dari file step.cy.js
    //     step.loadMoreFoto();
    // });

    // it('TCFP-02 - Open latest galeri foto', () => {
    //     // memanggil step openLatestFoto dari file step.cy.js
    //     step.openLatestFoto();
    // });

    // it('TCFP-03 - Back to top button foto', () => {
    //     // memanggil step backToTopFoto dari file step.cy.js
    //     step.backToTopFoto();
    // });

    it('TCFP-04 - Open latest kopi times news', () => {
        // memanggil step openLatestKopiTimesNews dari file step.cy.js
        step.openLatestKopiTimesNews();
    });

    // it('TCFP-05 - Open latest ketahanan informasi news', () => {
    //     // memanggil step openLatestKetahananInfoNews dari file step.cy.js
    //     step.openLatestKetahananInfoNews();
    // });

    // it('TCFP-06 - Slide carousel ketahanan informasi', () => {
    //     // memanggil step slideCarouselKetahananInfo dari file step.cy.js
    //     step.slideCarouselKetahananInfo();
    // });

});