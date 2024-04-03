export class Locator {
	// input
	inputSearch = 'input[name="q"]';

	// button
	btnHome = 'a[title="Home"]';
	btnLoadMore = '#load_more';
	btnSearchNews = '#search-addon';
	btnClosGovAds = '.close';

	// list news
	listNewsHome = '#list_news > :nth-child(9) > .media-body > .text-light';
	newsKe10 = '.li-media-border'; //9

	// title
	titleNewsBola = 'div[class="lh-100"]';
	titleNewsTidakDitemukan = '.mt-0:contains("Pencarian tidak ditemukan!")';

}
