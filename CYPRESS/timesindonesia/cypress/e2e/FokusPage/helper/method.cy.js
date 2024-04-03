import {
	Locator
} from './locator.cy';

const locator = new Locator(); // diimport dari file locator.cy.js yg sebelumnya dibuat

let outsideTitleHashtag;

export class Method {

	// menekan tombol fokus page
	clickButtonFokus() {
		cy.get(locator.btnFokus).should('exist').click();
	}

	// menekan tombol load more fokus
	clickLoadMoreButtonFokus() {
		cy.get(locator.hashtag).eq(49).should('be.visible');
		cy.get(locator.btnLoadMore).click();
	}

	// menekan hashtag urutan pertama
	clickFirstHashtag() {
		cy.get(locator.hashtag).eq(0).should('be.visible').click();
	}

	// // menekan tombol close government ads ekoran
	// clickGovAdsButtonHome() {
	// 	cy.get(locator.btnClosGovAds).click();
	// }

	// mendapatkan string judul di luar hashtag
	getTitleOutsideHashtag() {
		cy.get(locator.hashtag).eq(1).should('be.visible');
		cy.get(locator.titleFirstHashtagOutside).eq(0).invoke('text').then((text) => {
			outsideTitleHashtag = text.trim();
		})
	}

	// validasi hashtag bertambah
	validateHashtagIncreases() {
		cy.wait(100);
		cy.get(locator.hashtag).should('have.length.greaterThan', 100);
	}

	// validasi membuka hashtag urutan pertama
	validateOpenFirstHashtag() {
		cy.get(locator.titleFirstHashtagInside).eq(0).invoke('text').should((text) => {
			const insideTitleHashtag = text.trim();
			// Assert that both titles are the same
			expect(insideTitleHashtag).to.equal(outsideTitleHashtag);
		});
	}
}