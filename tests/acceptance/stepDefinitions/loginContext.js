const { Given, When, Then } = require("@cucumber/cucumber");
const { LoginPage } = require("../pageObjects/LoginPage");
const loginPage = new LoginPage();

Given("the user has browsed to login page", async function () {
  await loginPage.navigateToLoginPage();
});

When(
  "the user logs in with valid username {string} and valid password {string}",
  async function (username, password) {
    await loginPage.login(username, password);
  }
);

Then("the user should be able to acces his account", async function () {
  await loginPage.navigateToMainPage();
});
