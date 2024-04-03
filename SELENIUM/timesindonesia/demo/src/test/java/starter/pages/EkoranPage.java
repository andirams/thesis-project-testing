package starter.pages;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;

import java.text.SimpleDateFormat;
import java.util.Date;

import java.util.List;

import net.serenitybdd.core.pages.PageObject;
import net.thucydides.core.annotations.Step;

public class EkoranPage extends PageObject {

    private By loadMoreButton() {
        return By.id("load_more");
    }

    private By backToTopButton() {
        return By.id("back-to-top");
    }

    private By cardDeck() {
        return By.cssSelector(".bg-times");
    }

    private By latestCardDeck() {
        return By.cssSelector(".bg-times");
    }

    private By ekoranTitle() {
        return By.cssSelector(".border-bottom");
    }

    private By titleLatestEkoran() {
        String date = new SimpleDateFormat("dd MMMMM yyyy").format(new Date());
        return By.xpath("//h1[contains(text(), '" + date + "')]");
    }

    @Step
    public void openPage() {
        open();
    }

    @Step
    public void clickLoadMoreButton() {
        JavascriptExecutor js = (JavascriptExecutor) getDriver();
        js.executeScript(
                "const elements = document.getElementsByClassName('adsbygoogle adsbygoogle-noablate'); while (elements.length > 0) elements[0].remove()");
        js.executeScript("window.scrollBy(0,250)", "");
        $(loadMoreButton()).click();
    }

    @Step
    public void clickBackToTopButton() {
        $(backToTopButton()).click();
    }

    @Step
    public void scrollToBottom() {
        JavascriptExecutor jsExecutor = (JavascriptExecutor) getDriver();
        jsExecutor.executeScript("window.scrollTo(0, document.body.scrollHeight);");
    }

    @Step
    public void clickLatestCardNews() {
        By selector = latestCardDeck();
        List<WebElement> elements = getDriver().findElements(selector);
        $(elements.get(0)).click();
    }

    @Step
    public void validateNewsCardIncreases() {
        By selector = cardDeck();
        List<WebElement> elements = getDriver().findElements(selector);
        int elementCount = elements.size();
        Assert.assertEquals(10, elementCount);
    }

    @Step
    public boolean validateOpenRecentEkoran() {
        return $(titleLatestEkoran()).isDisplayed();
    }

    @Step
    public boolean validateOnTheTopPage() {
        // Optional<WebElementFacade> element = findFirst(ekoranTitle());
        // Long elementTop = (Long) evaluateJavascript("return
        // arguments[0].getBoundingClientRect().top;", element);
        // return elementTop >= 0;

        return $(ekoranTitle()).isSelected();
    }

}
