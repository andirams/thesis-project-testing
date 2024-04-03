import { Method } from './method.cy';

const method = new Method();

export class Step {
	// Load more foto
	loadMoreFoto() {
		// method.clickGovAdsButtonHome();
		method.clickButtonFoto();
		method.clickLoadMoreButtonFoto();
		method.validateNewsCardIncreases();
	}

	// Open latest foto
	openLatestFoto() {
		// method.clickGovAdsButtonHome();
		method.clickButtonFoto();
		method.getTitleOutsideFoto();
		method.clickLatestFoto();
		method.validateOpenRecentFoto();
	}

	// Back to top button foto
	backToTopFoto() {
		// method.clickGovAdsButtonHome();
		method.clickButtonFoto();
		method.scrollToBottomFoto();
		method.clickBackToTopButton();
		method.validateOnTheTopPage();
	}

	// Open latest kopi times news
	openLatestKopiTimesNews() {
		// method.clickGovAdsButtonHome();
		method.clickButtonFoto();
		method.getTitleOutsideKopiTimes();
		method.clickLatestKopiTimes();
		method.validateOpenRecentKopiTimes();
	}

	// Open latest ketahanan informasi news
	openLatestKetahananInfoNews() {
		// method.clickGovAdsButtonHome();
		method.clickButtonFoto();
		method.getTitleOutsideKetahananInfo();
		method.clickLatestKetahananInfo();
		method.validateOpenRecentKetahananInfo();
	}

	// Slide carousel ketahanan informasi
	slideCarouselKetahananInfo() {
		// method.clickGovAdsButtonHome();
		method.clickButtonFoto();
		method.slideCarouselKetahananInfo();
		method.validateSlideCarouselKetahananInfo();
	}

}
