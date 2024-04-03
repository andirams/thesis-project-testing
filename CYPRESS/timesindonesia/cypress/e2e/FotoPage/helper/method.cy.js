import {
	Locator
} from './locator.cy';
'@testing-library/cypress/add-commands';
'cypress-real-events/support';

const locator = new Locator(); // diimport dari file locator.cy.js yg sebelumnya dibuat

let outsideTitleFoto;
let outsideTitleKopiTimes;
let outsideTitleKetahananInfo;

export class Method {

	// menekan tombol foto page
	clickButtonFoto() {
		cy.get(locator.btnFoto).should('exist').click();
	}

	// menekan tombol load more foto
	clickLoadMoreButtonFoto() {
		cy.get(locator.cardDeck).eq(4).should('be.visible');
		cy.get(locator.btnLoadMore).click();
	}

	// menekan card foto terbaru
	clickLatestFoto() {
		cy.get(locator.cardDeck).eq(4).should('be.visible');
		cy.get(locator.cardFoto).eq(0).should('be.visible').click();
	}

	// menekan #KOPITIMES News terbaru
	clickLatestKopiTimes() {
		// cy.get(locator.cardDeck).eq(4).should('be.visible');
		cy.get(locator.kopiTimesNewsKe1).eq(0).should('be.visible').click();
	}

	// menekan #KETAHANANINFORMASI News terbaru
	clickLatestKetahananInfo() {
		// cy.get(locator.cardDeck).eq(4).should('be.visible');
		cy.get(locator.carouselKetahananInfoKe1).eq(0).should('be.visible').click();
	}

	// mendapatkan 3 kata yang sama di depan kalimat
	getFirstThreeWords(text) {
		const words = text.split(/\s+/);
		return words.slice(0, 3).join(' ');
	}

	// mendapatkan judul sebelum masuk galeri foto
	getTitleOutsideFoto() {
		cy.get(locator.cardDeck).eq(4).should('be.visible');
		cy.get(locator.titleLatestFotoOutside).eq(0).invoke('text').then((text) => {
			outsideTitleFoto = text.trim();
		})
	}

	// mendapatkan judul sebelum masuk #KOPITIMES News
	getTitleOutsideKopiTimes() {
		cy.get(locator.titleLatestKopiTimesOutside).eq(0).invoke('text').then((text) => {
			outsideTitleKopiTimes = text.trim();
		})
	}

	// mendapatkan judul sebelum masuk #KETAHANANINFORMASI News
	getTitleOutsideKetahananInfo() {
		cy.get(locator.titleLatestKetahananInfoOutside).eq(6).should('be.visible');
		cy.get(locator.titleLatestKetahananInfoOutside).eq(5).invoke('text').then((text) => {
			outsideTitleKetahananInfo = text.trim();
		})
	}

	// menekan card ekoran terbaru
	clickBackToTopButton() {
		cy.get(locator.btnBackToTop).click({
			force: true
		});
	}

	// menekan tombol clos government ads ekoran
	clickGovAdsButtonHome() {
		cy.get(locator.btnClosGovAds).click();
	}

	// Back to top button
	scrollToBottomFoto() {
		cy.scrollTo('bottom');
	}

	// geser berita
	slideCarouselKetahananInfo() {
		cy.get(locator.titleLatestKetahananInfoOutside).eq(6).should('be.visible');
		// cy.wait(100);
		cy.clock();
		cy.get(locator.caoruselKetahananInfo).eq(0).trigger('dragright');
	}

	// mengecek berita yang tergeser
	validateSlideCarouselKetahananInfo() {
		cy.get(locator.caoruselKetahananInfo).eq(0).should('not.have.class', 'is-selected')
	}

	// mengecek jumlah card ada 10
	validateNewsCardIncreases() {
		cy.get(locator.cardDeck).should('have.length', 10);
	}

	// mengecek membuka foto terbaru
	validateOpenRecentFoto() {
		cy.get(locator.titleLatestFotoInside).invoke('text').should((text) => {
			const insideTitleFoto = text.trim();
			// Assert that both titles are the same
			expect(insideTitleFoto).to.equal(outsideTitleFoto);
		});
	}
	// mengecek #KOPITIMES News terbaru
	validateOpenRecentKopiTimes() {
		cy.get(locator.titleLatestKopiTimesInside).invoke('text').should((text) => {
			const insideTitleKopiTimes = text.trim();

			const firstThreeWordsInsideArticle = this.getFirstThreeWords(insideTitleKopiTimes);
			const firstThreeWordsOutideArticle = this.getFirstThreeWords(outsideTitleKopiTimes);

			// Assert that both titles are the same
			expect(firstThreeWordsInsideArticle).to.equal(firstThreeWordsOutideArticle);
		});
	}

	// mengecek #KETAHANANINFORMASI News terbaru
	validateOpenRecentKetahananInfo() {
		cy.get(locator.titleLatestKetahananInfoInside).invoke('text').should((text) => {
			const insideTitleKetahananInfo = text.trim();

			const firstThreeWordsInsideArticle = this.getFirstThreeWords(insideTitleKetahananInfo);
			const firstThreeWordsOutideArticle = this.getFirstThreeWords(outsideTitleKetahananInfo);

			// Assert that both titles are the same
			expect(firstThreeWordsInsideArticle).to.equal(firstThreeWordsOutideArticle);
		});
	}

	// mengecek title ekoran
	validateOnTheTopPage() {
		cy.get(locator.titleFoto).should('be.visible');
	}

}