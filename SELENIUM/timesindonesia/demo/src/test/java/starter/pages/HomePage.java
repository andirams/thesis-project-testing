package starter.pages;

import org.openqa.selenium.By;

import net.serenitybdd.core.pages.PageObject;
import net.thucydides.core.annotations.Step;

public class HomePage extends PageObject {

    private By searchField() {
        return By.name("q");
    }

    private By modalGovAds1() {
        return By.xpath("//span[.='×']");
        // return By.cssSelector(".close");
    }

    private By ekoranPageButton() {
        return By.xpath("//a[@href='/ekoran']");
    }

    private By fotoPageButton() {
        return By.xpath("//a[@href='/foto']");
    }

    private By fokusPageButton() {
        return By.xpath("//a[@href='/fokus']");
    }

    private By kanalPageButton() {
        return By.xpath("//a[@href='/kanal']");
    }

    private By loadMoreButton() {
        return By.id("load_more");
    }

    private By searchButton() {
        return By.id("search-addon");
    }

    private By listNews() {
        return By.cssSelector("#list_news>li");
    }

    private By titleNewsBola() {
        return By.xpath("//div[@class='lh-100']//*[contains(text(), 'Bola')]");
    }

    private By newsTidakDitemukan() {
        return By.xpath("//h6[.='Pencarian tidak ditemukan!']");
    }

    @Step
    public void openPage() {
        getDriver().manage().window().maximize();
        open();
        // clickCloseGovAdButton();
    }

    @Step
    public void inputSearchNews(String search) {
        $(searchField()).type(search);
    }

    @Step
    public void clickLoadMoreButton() {
        $(loadMoreButton()).click();
    }

    @Step
    public void clickCloseGovAdButton() {
        try {
            $(modalGovAds1()).isDisplayed();
            $(modalGovAds1()).click();
        } catch (Exception e) {
        }
    }

    @Step
    public void clicksearchButton() {
        $(searchButton()).click();
    }

    @Step
    public void clickEkoranPageButton() {
        $(ekoranPageButton()).click();
    }

    @Step
    public void clickFotoPageButton() {
        $(fotoPageButton()).click();
    }

    @Step
    public void clickFokusPageButton() {
        $(fokusPageButton()).click();
    }

    @Step
    public void clickKanalPageButton() {
        $(kanalPageButton()).click();
    }

    @Step
    public boolean validateNewsRowIncreases() {
        return $(listNews()).isDisplayed();
    }

    @Step
    public boolean validateSuitableNewsTitleBola() {
        return $(titleNewsBola()).isDisplayed();
    }

    @Step
    public boolean validateNewsNotFound() {
        // waitFor(newsTidakDitemukan()).waitUntilVisible();
        waitFor("//h6[.='Pencarian tidak ditemukan!']").waitForElement();
        return $(newsTidakDitemukan()).isDisplayed();
    }

}
