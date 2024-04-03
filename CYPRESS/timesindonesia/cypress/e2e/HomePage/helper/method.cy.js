import {
	Locator
} from './locator.cy';

const locator = new Locator(); // diimport dari file locator.cy.js yg sebelumnya dibuat

export class Method {

	// method untuk mengisi topik news benar
	inputSearchNewsBola() {
		var newsTopic = "Bola";
		cy.get(locator.inputSearch).type(newsTopic);
		cy.get(locator.inputSearch).should('have.value', newsTopic);
	}

	// method untuk mengisi topik news random
	inputSearchNewsRandom() {
		var newsTopic = "Adklkznl";
		cy.get(locator.inputSearch).type(newsTopic);
		cy.get(locator.inputSearch).should('have.value', newsTopic);
	}

	// method untuk mengisi topik news hanya angka
	inputSearchNewsNumber() {
		var newsTopic = "12345";
		cy.get(locator.inputSearch).type(newsTopic);
		cy.get(locator.inputSearch).should('have.value', newsTopic);
	}

	// menekan tombol search
	clickSearchButton() {
		cy.get(locator.btnSearchNews).should('exist').click();
	}

	// menekan tombol home page
	clickButtonHome() {
		cy.get(locator.btnHome).should('exist').click();
	}

	// menekan tombol load more home
	clickLoadMoreButtonHome() {
		cy.get(locator.newsKe10).eq(9).should('be.visible');
		cy.get(locator.btnLoadMore).click();
	}

	// menekan tombol close government ads home
	clickGovAdsButtonHome() {
		cy.get(locator.btnClosGovAds).click();
	}

	// validasi berita yang dicari sesuai
	validateSuitableNewsTitleBola() {
		cy.get(locator.titleNewsBola).should('be.visible').contains('Bola');
	}

	// validasi tulisan Pencarian tidak ditemukan
	validateNewsNotFound() {
		cy.get(locator.titleNewsTidakDitemukan).should('be.visible');
	}

	// validasi baris bertambah
	validateNewRowIncreasesHome() {
		cy.scrollTo('bottom');		
		cy.get(locator.listNewsHome).should('be.undefined');
	}

}