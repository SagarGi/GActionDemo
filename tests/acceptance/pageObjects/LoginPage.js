class LoginPage {
  constructor() {
    this.websiteURL = "https://saucedemo.com";
    this.usernameSelector = "#user-name";
    this.passwordSelector = "#password";
    this.loginButtonSelector = "#login-button";
    this.appLogoSelector = ".app_logo";
  }

  async navigateToLoginPage() {
    await page.goto(this.websiteURL);
  }

  async login(username, password) {
    const usernameLocator = page.locator(this.usernameSelector);
    await usernameLocator.fill(username);
    const passwordLocator = page.locator(this.passwordSelector);
    await passwordLocator.fill(password);
    const loginButtonLocator = page.locator(this.loginButtonSelector);
    await loginButtonLocator.click();
  }

  async navigateToMainPage() {
    const logoLocator = page.locator(this.appLogoSelector);
    await expect(logoLocator).toBeVisible();
  }
}

module.exports = { LoginPage };
