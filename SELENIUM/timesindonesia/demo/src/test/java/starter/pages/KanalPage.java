package starter.pages;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import net.serenitybdd.core.pages.PageObject;
import net.thucydides.core.annotations.Step;

public class KanalPage extends PageObject {

    String outsideTitleHashtag;

    private By searchField() {
        return By.cssSelector(".form-control");
    }

    private By searchButton() {
        return By.cssSelector(".btn-outline-secondary");
    }

    private By hashtag() {
        return By.cssSelector(".text-dark");
    }

    private By titleFirstHashtagOutside() {
        return By.cssSelector(".text-dark");
    }

    private By titleFirstHashtagInside() {
        return By.cssSelector(".lh-100");
    }

    private By titleNewsPendidikan() {
        return By.xpath("//div[@class='lh-100']//*[contains(text(), 'Pendidikan')]");
    }

    private By newsTidakDitemukan() {
        return By.xpath("//h6[.='Pencarian tidak ditemukan!']");
    }

    @Step
    public void inputSearchNews(String search) {
        By selector = searchField();
        List<WebElement> elements = getDriver().findElements(selector);
        $(elements.get(1)).type(search);
    }

    @Step
    public void getTitleOutsideHashtag() {
        By selector = titleFirstHashtagOutside();
        List<WebElement> elements = getDriver().findElements(selector);
        outsideTitleHashtag = $(elements.get(2)).getText().trim();
    }

    @Step
    public void clicksearchButtonKanal() {
        $(searchButton()).click();
    }

    @Step
    public void clickFirstHashtag() {
        By selector = hashtag();
        List<WebElement> elements = getDriver().findElements(selector);
        $(elements.get(2)).click();
    }

    @Step
    public boolean validateSuitableNewsTitlePendidikan() {
        return $(titleNewsPendidikan()).isDisplayed();
    }

    @Step
    public boolean validateNewsNotFound() {
        // waitFor(newsTidakDitemukan()).waitUntilVisible();
        waitFor("//h6[.='Pencarian tidak ditemukan!']").waitForElement();
        return $(newsTidakDitemukan()).isDisplayed();
    }

    @Step
    public boolean validateOpenFirstHashtag() {
        By selector = titleFirstHashtagInside();
        List<WebElement> elements = getDriver().findElements(selector);

        String insideArticleTitle = $(elements.get(0)).getText().trim();
        return $(insideArticleTitle).equals(outsideTitleHashtag);
    }

    

}
