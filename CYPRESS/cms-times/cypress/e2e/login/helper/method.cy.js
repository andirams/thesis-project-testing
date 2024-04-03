import { Locator } from './locator.cy';

const locator = new Locator(); // diimport dari file locator.cy.js yg sebelumnya dibuat

export class Method {
	// method untuk mengisi email benar
	inputUsername() {
		// let email = Cypress.env('account_email');
        var username = "bagus.satria23@gmail.com";
		cy.get(locator.inputUsername).type(username);
		cy.get(locator.inputUsername).should('have.value', username);
	}

	// method untuk mengisi email salah
    inputIncorrectUsername(){
        var username = "bagus.satria@gmail.com";
		cy.get(locator.inputUsername).type(username);
		cy.get(locator.inputUsername).should('have.value', username);
    }

	// // method untuk mengisi email yang tidak terdaftar
    // fillUnregisteredUsername(){
    //     var username = "appstart@gmail.com";
	// 	cy.get(locator.inputUsername).type(username);
	// 	cy.get(locator.inputUsername).should('have.value', username);
    // }

	// // method untuk mengisi username kurang dari 3 characater
	// fillLessThan3CharUsername() {
    //     var username = "a";
	// 	cy.get(locator.inputUsername).type(username);
	// 	cy.get(locator.inputUsername).should('have.value', username);
	// }

	// // method untuk mengisi password kurang dari 3 character
	// fillLessThan3CharPassword() {
    //     var password = "a";
	// 	cy.get(locator.inputPassword).type(password);
	// 	cy.get(locator.inputPassword).should('have.value', password);
	// }

	// method untuk mengisi password benar
	inputPassword() {
        var password = "asdf";
		cy.get(locator.inputPassword).type(password);
		cy.get(locator.inputPassword).should('have.value', password);
	}

	// method untuk mengisi password salah
	inputIncorrectPassword() {
        var password = "asdfxx";
		cy.get(locator.inputPassword).type(password);
		cy.get(locator.inputPassword).should('have.value', password);
	}

	// // mmenekan captcha checkbox
    // tapRecaptchaCheckbox(){
    //     cy.get(locator.checkboxRecaptcha).click();
    //     cy.get(locator.checkboxRecaptcha).should('be.checked');
    // }

    // menekan tombol login
	tapButtonLogin() {
		cy.get(locator.btnLogin).click();
	}

    // menekan tombol keluar
	tapButtonKeluar() {
		cy.get(locator.btnKeluar).click();
	}

	// mengecek user profile
    validateOnDashboard(){
        cy.get(locator.navbarBrandCMS).should('be.visible');
	}

	// mengecek user kembali ke login page
    validateOnLoginPage(){
        cy.get(locator.btnLogin).should('be.visible');
    }

	// mengecek error alert
    checkErrorAlert(){
        cy.get(locator.alertError).should('be.visible');
    }

	// // mengecek warning isi minimal 3 symbol/char
	// checkWarningMinimum3Char(){
	// 	cy.get(locator.alertMinimum3CharUname).eq(0).should('be.visible');
	// 	cy.get(locator.btnLogin).should('be.disabled');
	// }
}
