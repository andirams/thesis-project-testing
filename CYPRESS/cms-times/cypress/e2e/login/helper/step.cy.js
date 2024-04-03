import { Method } from './method.cy';

const method = new Method();

export class Step {
	// Input correct username and correct password
	loginWithValidCredentials() {
		method.inputUsername();
		method.inputPassword();
		method.tapButtonLogin();
        method.validateOnDashboard();
	}

	// Input correct username and incorrect password
	loginWithIncorrectPassword() {
		method.inputUsername();
		method.inputIncorrectPassword();
		method.tapButtonLogin();
		method.checkErrorAlert();
	}

	// Input incorrect username and correct password
	loginWithIncorrectUsername() {
		method.inputIncorrectUsername();
		method.inputPassword();
		method.tapButtonLogin();
		method.checkErrorAlert();
	}

	// Input incorrect username and incorrect password
	loginWithInvalidCredentials() {
		method.inputIncorrectUsername();
		method.inputIncorrectPassword();
		method.tapButtonLogin();
		method.checkErrorAlert();
	}

	// Logout from the account
	logoutFromTheAccount() {
		method.inputUsername();
		method.inputPassword();
		method.tapButtonLogin();
		method.tapButtonKeluar();
		method.validateOnLoginPage();
	}

}
