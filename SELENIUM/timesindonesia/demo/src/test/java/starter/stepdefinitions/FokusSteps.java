package starter.stepdefinitions;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import net.thucydides.core.annotations.Steps;
import starter.pages.FokusPage;
import starter.pages.HomePage;

public class FokusSteps {
    @Steps
    HomePage homePage;

    @Steps
    FokusPage fokusPage;

    @Given("I am on the times indonesia fokus page")
    public void onTheFokusPage() {
        homePage.openPage();
        homePage.clickFokusPageButton();
    }

    @When("I get title outside hashtag")
    public void getTitleOutsideHashtag() {
        fokusPage.getTitleOutsideHashtag();
    }

    @Given("I click on the load more button fokus")
    public void clickLoadMoreButton() {
        fokusPage.clickLoadMoreButton();
    }

    @And("I click on the first hashtag")
    public void clickFirstHashtag() {
        fokusPage.clickFirstHashtag();
    }

    @Then("I should see hashtag increases")
    public void validateHashtagIncreases() {
        fokusPage.validateHashtagIncreases();
    }

    @Then("I should see the topics based on hashtag")
    public void validateOpenFirstHashtag() {
        fokusPage.validateOpenFirstHashtag();
    }
}
