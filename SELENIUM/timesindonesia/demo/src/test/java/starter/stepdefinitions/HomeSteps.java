package starter.stepdefinitions;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import net.thucydides.core.annotations.Steps;
import starter.pages.HomePage;

public class HomeSteps {
    @Steps
    HomePage homePage;

    /// Positive

    @Given("I am on the times indonesia home page")
    public void onTheHomePage() {
        homePage.openPage();
        // homePage.clickCloseGovAdButton();
    }

    @When("I type news topic in search field Bola")
    public void inputSearchNewsBola() {
        homePage.inputSearchNews("Bola");
    }

    @When("I type only number news topic in search field")
    public void inputSearchNewsNumber() {
        homePage.inputSearchNews("12345");
    }

    @When("I click on the load more button")
    public void clickLoadMoreButton() {
        homePage.clickLoadMoreButton();
    }

    @And("I click search button")
    public void clicksearchButton() {
        homePage.clicksearchButton();
    }

    @Then("I should see news row increases")
    public void validateNewsRowIncreases() {
        homePage.validateNewsRowIncreases();
    }

    @Then("I can see the news im looking for")
    public void validateSuitableNewsTitleBola() {
        homePage.validateSuitableNewsTitleBola();
    }

    /// Negative

    @When("I type random news topic in search field")
    public void inputSearchNewsRandom() {
        homePage.inputSearchNews("Adklkznl");
    }

    @Then("I can not see the news im looking for")
    public void validateNewsNotFound() {
        homePage.validateNewsNotFound();
    }

}
