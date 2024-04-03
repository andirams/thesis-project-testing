import { Method } from './method.cy';

const method = new Method();

export class Step {
	// TCFKP-01 - Load more fokus berita hashtag
	loadMoreFokus() {
		// method.clickGovAdsButtonHome();
		method.clickButtonFokus();
		method.clickLoadMoreButtonFokus();
		method.validateHashtagIncreases();
	}

	// TCFKP-02 - Opening the first hashtag of Fokus Berita
	openFirstHashtagFokus() {
		// method.clickGovAdsButtonHome();
		method.clickButtonFokus();
		method.getTitleOutsideHashtag();
		method.clickFirstHashtag();
		method.validateOpenFirstHashtag();
	}

}
