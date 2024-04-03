import { Method } from './method.cy';

const method = new Method();

export class Step {
	// TCEP-01 - Load more ekoran
	loadMoreEkoran() {
		// method.clickGovAdsButtonHome();
		method.clickButtonEkoran();
		method.clickLoadMoreButtonEkoran();
		method.validateNewsCardIncreases();
	}

	// TCEP-02 - Open latest ekoran
	openLatestEkoran() {
		// method.clickGovAdsButtonHome();
		method.clickButtonEkoran();
		method.clickLatestEkoran();
		method.validateOpenRecentEkoran();
	}

	// TCEP-03 - Back to top button
	backToTopEkoran() {
		// method.clickGovAdsButtonHome();
		method.clickButtonEkoran();
		method.scrollToBottomEkoran();
		method.clickBackToTopButton();
		method.validateOnTheTopPage();
	}

}
