import { Method } from './method.cy';

const method = new Method();

export class Step {
	//// ERROR LazyLoad
	// // TCHP-01 - Load more berita #TERBARU
	loadMoreBeritaHome() {
		// method.clickGovAdsButtonHome();
		method.clickButtonHome();
		// method.clickGovAdsButtonHome();
		// method.clickGovAdsButtonHome();
		method.clickLoadMoreButtonHome();
		method.validateNewRowIncreasesHome();
	}

	// TCHP-01 - Search news with correct input
	searchNewsWithCorrectInput() {
		// method.clickGovAdsButtonHome();
		method.inputSearchNewsBola();
		method.clickSearchButton();
		method.validateSuitableNewsTitleBola();
	}

	// TCHP-02 - Search news with random input
	searchNewsWithRandomInput() {
		// method.clickGovAdsButtonHome();
		method.inputSearchNewsRandom();
		method.clickSearchButton();
		method.validateNewsNotFound();
	}

	// TCHP-03 - Search news with number input only
	searchNewsWithNumberInput() {
		// method.clickGovAdsButtonHome();
		method.inputSearchNewsNumber();
		method.clickSearchButton();
		method.validateNewsNotFound();
	}


}
