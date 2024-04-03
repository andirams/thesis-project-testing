package starter.stepdefinitions;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import net.thucydides.core.annotations.Steps;
import starter.pages.FotoPage;
import starter.pages.HomePage;

public class FotoSteps {
    @Steps
    HomePage homePage;

    @Steps
    FotoPage fotoPage;

    /// Positive

    @Given("I am on the times indonesia foto page")
    public void onTheFotoPage() {
        homePage.openPage();
        homePage.clickFotoPageButton();
    }

    @When("I get title outside kopi times")
    public void getTitleOutsideKopiTimes() {
        fotoPage.getTitleOutsideKopiTimes();
    }

    @When("I get title outside ketahanan informasi")
    public void getTitleOutsideKetahananInfo() {
        fotoPage.getTitleOutsideKetahananInfo();
    }

    @And("I click on the most recent kopi times news")
    public void clickLatestKopiTimes() {
        fotoPage.clickLatestKopiTimes();
    }

    @And("I click on the most recent ketahanan informasi news")
    public void clickLatestKetahananInfo() {
        fotoPage.clickLatestKetahananInfo();
    }

    @When("I slide carousel ketahanan informasi news")
    public void slideCarouselKetahananInfo() {
        fotoPage.slideCarouselKetahananInfo();
    }

    @Then("I should see the most recent kopi times news")
    public void validateOpenRecentKopiTimes() {
        fotoPage.validateOpenRecentKopiTimes();
    }

    @Then("I should see the most recent ketahanan informasi news")
    public void validateOpenRecentKetahananInfo() {
        fotoPage.validateOpenRecentKetahananInfo();
    }

    @Then("I should see ketahanan informasi news slided")
    public void validateKetahananInfoSlided() {
        fotoPage.validateKetahananInfoSlided();
    }
}
