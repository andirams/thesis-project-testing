import {
	Locator
} from './locator.cy';

const locator = new Locator(); // diimport dari file locator.cy.js yg sebelumnya dibuat

export class Method {

	// menekan tombol Ekoran
	clickButtonEkoran() {
		cy.get(locator.btnEkoran).should('exist').click();
	}

	// menekan tombol load more Ekoran
	clickLoadMoreButtonEkoran() {
		cy.get(locator.cardDeck).eq(4).should('be.visible');
		cy.get(locator.btnLoadMore).click();
	}

	// menekan card ekoran terbaru
	clickLatestEkoran() {
		cy.get(locator.cardEkoran).eq(0).should('be.visible').click();
	}

	// menekan tombol back to top
	clickBackToTopButton() {
		cy.get(locator.btnBackToTop).click({force: true});
	}

	// // menekan tombol clos government ads ekoran
	// clickGovAdsButtonHome() {
	// 	cy.get(locator.btnClosGovAds).click();
	// }

	// scroll to bottom ekoran
	scrollToBottomEkoran() {
		cy.scrollTo('bottom');
	}

	// mengecek jumlah card ada 10
	validateNewsCardIncreases() {
		cy.get(locator.cardDeck).should('have.length', 10);
	}

	// validasi membuka ekoran terbaru
	validateOpenRecentEkoran() {
		const currentDate = new Date();

		// Format tanggal
		const day = currentDate.getDate();
		const month = new Intl.DateTimeFormat('id-ID', {
			month: 'long'
		}).format(currentDate);
		const year = currentDate.getFullYear();

		// Hasil akhir
		const formattedDate = `${day} ${month} ${year}`;

		console.log(formattedDate);
		cy.get(locator.titleLatestEkoran).should('be.visible').contains(formattedDate);
	}

	// validasi berada di atas page
	validateOnTheTopPage() {
		cy.get(locator.titleEkoran).should('be.visible');
	}

}