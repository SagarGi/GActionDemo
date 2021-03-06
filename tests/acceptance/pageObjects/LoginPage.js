class LoginPage {
  constructor() {
    this.websiteURL = "http://localhost:8080/administrator";
    this.usernameSelector = "#mod-login-username";
    this.passwordSelector = "#mod-login-password";
    this.loginButtonSelector =
      "//button[@class= 'btn btn-primary btn-block btn-large login-button']";
    this.appLogoSelector = '//h1[@class="page-title"]';
    this.msgSelector = ".alert-message";
  }

  async navigateToLoginPage() {
    await page.goto(this.websiteURL);
    const loginPageLocator = page.locator(
      '//img[@src= "/administrator/templates/isis/images/joomla.png"]'
    );
    await expect(loginPageLocator).toBeVisible();
  }

  async login(username, password) {
    await page.fill(this.usernameSelector, username);
    await page.fill(this.passwordSelector, password);
    await page.locator(this.loginButtonSelector).click();
  }

  async navigateToMainPage() {
    const titleLocator = await page.locator(this.appLogoSelector);
    await expect(titleLocator).toBeVisible();
  }

  /**
   * Function to get error message that is shown for invalid login credentials
   * @return {string} Error message on invalid login
   */
  async getErrorMsg() {
    const msgLocator = await page.locator(this.msgSelector);
    const msgText = await msgLocator.innerText();

    return msgText;
  }
}

module.exports = { LoginPage };
