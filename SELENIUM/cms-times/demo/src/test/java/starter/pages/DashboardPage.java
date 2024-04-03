package starter.pages;

import org.openqa.selenium.By;

import net.serenitybdd.core.pages.PageObject;
import net.thucydides.core.annotations.Step;

public class DashboardPage extends PageObject{

    private By navbarBrand() {
        return By.className("navbar-brand");
    }

    private By keluarButton() {
        return By.xpath("//a[contains(.,'Keluar')]");
    }

    @Step
    public boolean validateOnDashboard(){
        return $(navbarBrand()).isDisplayed();
    }

    @Step
    public void clickKeluarButton(){
        $(keluarButton()).click();
    }

}
