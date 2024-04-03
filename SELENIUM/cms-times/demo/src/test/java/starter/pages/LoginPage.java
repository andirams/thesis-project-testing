package starter.pages;

import org.openqa.selenium.By;

import net.serenitybdd.core.pages.PageObject;
import net.thucydides.core.annotations.Step;

public class LoginPage extends PageObject{

    private By usernameField() {
        return By.id("inputEmail");
    }

    private By passwordField() {
        return By.id("inputPassword");
    }

    private By loginButton() {
        return By.name("login");
    }

    private By errorAlert(){
        return By.className("alert");
    }

    @Step
    public void openPage() {
        getDriver().manage().window().maximize();
        open();
    }

    @Step
    public void inputUsername(String username) {
        $(usernameField()).type(username);
    }

    @Step
    public void inputPassword(String password) {
        $(passwordField()).type(password);
    }

    @Step
    public void clickLoginButton(){
        $(loginButton()).click();
    }

    @Step
    public boolean checkErrorAlert(){
        return $(errorAlert()).isDisplayed();
    }

    @Step
    public boolean validateOnLoginPage(){
        return $(loginButton()).isDisplayed();
    }

}
