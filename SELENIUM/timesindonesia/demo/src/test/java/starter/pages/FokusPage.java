package starter.pages;

import java.util.List;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import net.serenitybdd.core.pages.PageObject;
import net.thucydides.core.annotations.Step;

public class FokusPage extends PageObject {

    String outsideTitleHashtag;

    private By loadMoreButton() {
        return By.id("load_more");
    }

    private By hashtag() {
        return By.cssSelector(".p-2");
    }

    private By titleFirstHashtagOutside() {
        return By.cssSelector(".mb-1");
    }

    private By titleFirstHashtagInside() {
        return By.cssSelector(".text-white");
    }

    @Step
    public void clickLoadMoreButton() {
        $(loadMoreButton()).click();
    }

    @Step
    public void clickFirstHashtag() {
        By selector = hashtag();
        List<WebElement> elements = getDriver().findElements(selector);
        $(elements.get(0)).click();
    }

    @Step
    public void getTitleOutsideHashtag() {
        By selector = titleFirstHashtagOutside();
        List<WebElement> elements = getDriver().findElements(selector);
        outsideTitleHashtag = $(elements.get(0)).getText().trim();
    }

    @Step
    public void validateHashtagIncreases() {
        By selector = hashtag();
        List<WebElement> elements = getDriver().findElements(selector);
        int elementCount = elements.size();
        Assert.assertTrue(elementCount > 100);
    }

    @Step
    public boolean validateOpenFirstHashtag() {
        By selector = titleFirstHashtagInside();
        List<WebElement> elements = getDriver().findElements(selector);

        String insideArticleTitle = $(elements.get(0)).getText().trim();
        return $(insideArticleTitle).equals(outsideTitleHashtag);
    }

}
