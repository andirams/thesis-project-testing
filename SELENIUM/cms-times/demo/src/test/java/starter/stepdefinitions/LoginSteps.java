package starter.stepdefinitions;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import net.thucydides.core.annotations.Steps;
import starter.pages.DashboardPage;
import starter.pages.LoginPage;

public class LoginSteps {
    @Steps
    LoginPage loginPage;

    @Steps
    DashboardPage dashboardPage;

    /// Positive

    @Given("I am on the cms times login page")
    public void onTheLoginPage() {
        loginPage.openPage();
    }

    @And("I type correct username")
    public void inputUsername() {
        loginPage.inputUsername("bagus.satria23@gmail.com");
    }

    @And("I type correct password")
    public void inputPassword() {
        loginPage.inputPassword("asdf");
    }

    @When("I click on the login button")
    public void clickLoginButton() {
        loginPage.clickLoginButton();
    }

    @And("I click on the keluar button")
    public void clickKeluarButton() {
        dashboardPage.clickKeluarButton();
    }

    @Then("I should redirected to cms times dashboard")
    public void validateOnDashboard() {
        dashboardPage.validateOnDashboard();
    }

    @Then("I should redirected back to cms times login page")
    public void validateOnLoginPage() {
        loginPage.validateOnLoginPage();
    }

    /// Negative

    @And("I type incorrect password")
    public void inputIncorrectPassword() {
        loginPage.inputPassword("asdfxx");
    }

    @And("I type incorrect username")
    public void inputIncorrectUsername() {
        loginPage.inputUsername("bagus.satria@gmail.com");
    }

    @Then("I should see incorrect alert notification")
    public void checkErrorAlert() {
        loginPage.checkErrorAlert();
    }

}
