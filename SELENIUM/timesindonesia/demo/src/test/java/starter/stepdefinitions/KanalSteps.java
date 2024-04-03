package starter.stepdefinitions;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import net.thucydides.core.annotations.Steps;
import starter.pages.HomePage;
import starter.pages.KanalPage;

public class KanalSteps {

    @Steps
    HomePage homePage;

    @Steps
    KanalPage kanalPage;

    @Given("I am on the times indonesia kanal page")
    public void onTheKanalPage() {
        homePage.openPage();
        homePage.clickKanalPageButton();
    }

    @When("I type news topic in search field Pendidikan")
    public void inputSearchNewsBola() {
        kanalPage.inputSearchNews("Pendidikan");
    }

    @When("I type only number news topic in search field kanal")
    public void inputSearchNewsNumber() {
        kanalPage.inputSearchNews("12345");
    }

    @When("I get title outside hashtag kanal")
    public void getTitleOutsideHashtag() {
        kanalPage.getTitleOutsideHashtag();
    }

    @And("I click search button kanal")
    public void clicksearchButtonKanal() {
        kanalPage.clicksearchButtonKanal();
    }

    @And("I click on the first hashtag kanal")
    public void clickFirstHashtag() {
        kanalPage.clickFirstHashtag();
    }

    @Then("I should see the topics based on hashtag kanal")
    public void validateOpenFirstHashtag() {
        kanalPage.validateOpenFirstHashtag();
    }

    @Then("I can see the news im looking for Pendidikan")
    public void validateSuitableNewsTitlePendidikan() {
        kanalPage.validateSuitableNewsTitlePendidikan();
    }

    /// Negative

    @When("I type random news topic in search field kanal")
    public void inputSearchNewsRandom() {
        kanalPage.inputSearchNews("Adklkznl");
    }

    //// Tidak digunakan karena sama dengan yang ada di HomeSteps.java
    // @Then("I can not see the news im looking for")
    // public void validateNewsNotFound() {
    //     kanalPage.validateNewsNotFound();
    // }
}
