package starter.pages;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;

import java.util.List;

import net.serenitybdd.core.pages.PageObject;
import net.thucydides.core.annotations.Step;

public class FotoPage extends PageObject {

    String outsideTitleKopiTimes;
    String outsideTitleKetahananInfo;

    private By loadMoreButton() {
        return By.id("load_more");
    }

    private By cardDeck() {
        return By.cssSelector(".bg-times");
    }

    private By kopiTimesNewsKe1() {
        return By.cssSelector(".media");
    }

    private By ketahananInfoNewsKe1() {
        return By.cssSelector(".carousel");
    }

    private By titleLatestKopiTimesOutside() {
        return By.cssSelector(".mb-1");
    }

    private By titleLatestKopiTimesInside() {
        return By.cssSelector(".post-title");
    }

    private By titleLatestKetahananInfoOutside() {
        return By.cssSelector(".card-title");
    }

    private By titleLatestKetahananInfoInside() {
        return By.cssSelector(".post-title");
    }

    private By sliderKetahananInfoKe1() {
        return By.cssSelector(".flickity-slider");
    }

    private By sliderKetahananInfoAll() {
        return By.cssSelector(".flickity-viewport");
    }

    @Step
    public void openPage() {
        open();
    }

    @Step
    public void clickLoadMoreButton() {
        $(loadMoreButton()).click();
    }

    @Step
    public void clickLatestKopiTimes() {
        By selector = kopiTimesNewsKe1();
        List<WebElement> elements = getDriver().findElements(selector);
        $(elements.get(0)).click();
    }

    @Step
    public void clickLatestKetahananInfo() {
        By selector = ketahananInfoNewsKe1();
        List<WebElement> elements = getDriver().findElements(selector);
        $(elements.get(0)).click();
    }

    @Step
    public void getTitleOutsideKopiTimes() {
        By selector = titleLatestKopiTimesOutside();
        List<WebElement> elements = getDriver().findElements(selector);
        outsideTitleKopiTimes = $(elements.get(0)).getText().trim();
    }

    @Step
    public void getTitleOutsideKetahananInfo() {
        By selector = titleLatestKetahananInfoOutside();
        List<WebElement> elements = getDriver().findElements(selector);
        outsideTitleKetahananInfo = $(elements.get(5)).getText().trim();
    }

    @Step
    public void slideCarouselKetahananInfo() {
        By selector = sliderKetahananInfoKe1();
        List<WebElement> elements = getDriver().findElements(selector);

        By selectorAll = sliderKetahananInfoAll();
        List<WebElement> elements2 = getDriver().findElements(selectorAll);

        int stepWidth = $(elements2.get(0)).getSize().getWidth() / 2;

        Actions actions = new Actions(getDriver());
        actions.clickAndHold($(elements.get(0))).moveByOffset(stepWidth * 1, 0).release().perform();
    }

    @Step
    public boolean validateOpenRecentKopiTimes() {
        String insideArticleTitle = $(titleLatestKopiTimesInside()).getText().trim();
        return $(insideArticleTitle).equals(outsideTitleKopiTimes);
    }

    @Step
    public boolean validateOpenRecentKetahananInfo() {
        String insideArticleTitle = $(titleLatestKetahananInfoInside()).getText().trim();
        return $(insideArticleTitle).equals(outsideTitleKetahananInfo);
    }

    @Step
    public boolean validateKetahananInfoSlided() {
        return $(sliderKetahananInfoKe1()).containsElements(".is-selected");
    }

    @Step
    public void validateNewsCardIncreases() {
        By selector = cardDeck();
        List<WebElement> elements = getDriver().findElements(selector);
        int elementCount = elements.size();
        Assert.assertEquals(10, elementCount);
    }

}
