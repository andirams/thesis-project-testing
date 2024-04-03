package starter.stepdefinitions;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import net.thucydides.core.annotations.Steps;
import starter.pages.EkoranPage;
import starter.pages.HomePage;

public class EkoranSteps {

    @Steps
    HomePage homePage;

    @Steps
    EkoranPage ekoranPage;

    /// Positive

    @Given("I am on the times indonesia ekoran page")
    public void onTheEkoranPage() {
        homePage.openPage();
        homePage.clickEkoranPageButton();
    }

    @When("I click on the load more button ekoran")
    public void clickLoadMoreButtonEkoran() {
        ekoranPage.clickLoadMoreButton();
    }

    @When("I click on the most recent ekoran news")
    public void clickLatestCardNewsEkoran() {
        ekoranPage.clickLatestCardNews();
    }

    @When("I scroll to bottom of the page")
    public void scrollToBottom() {
        ekoranPage.scrollToBottom();
    }

    @And("I click back to top button")
    public void clickBackToTopButton() {
        ekoranPage.clickBackToTopButton();
    }

    @Then("I should see ekoran card increases")
    public void validateNewsCardIncreases() {
        ekoranPage.validateNewsCardIncreases();
    }

    @Then("I should see the most recent ekoran news")
    public void validateOpenRecentEkoran() {
        ekoranPage.validateOpenRecentEkoran();
    }

    @Then("I should go back to top of the page")
    public void validateOnTheTopPage() {
        ekoranPage.validateOnTheTopPage();
    }

}
