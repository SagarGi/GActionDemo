const { Given, When, Then } = require("@cucumber/cucumber");

Given("the admin has browsed to installation page", async function () {
  await page.goto("http://localhost:8080");
});

When("the admin creates his account", async function () {
  const siteNameSelector = "#jform_site_name";
  const emailSelector = "#jform_admin_email";
  const usernameSelector = "#jform_admin_user";
  const passwordSelector = "#jform_admin_password";
  const confirmPasswordSelector = "#jform_admin_password2";
  const databseConnectionButtonSelector = `#database`;

  // fill site name
  await page.fill(siteNameSelector, "sagar");
  // fill super user account details
  await page.fill(emailSelector, "sagargurung1001@gmail.com");
  await page.fill(usernameSelector, "lambu");
  await page.fill(passwordSelector, "12345");
  await page.fill(confirmPasswordSelector, "12345");

  // next to database connection setting
  await page.locator(databseConnectionButtonSelector).click();
});

When("the admin connects mysql to joomla", async function () {
  const hostNameSelector = "#jform_db_host";
  const usernameSelector = "#jform_db_user";
  const passwordSelector = "#jform_db_pass";
  const databaseNameSelector = "#jform_db_name";
  const tablePrefixSelector = "#jform_db_prefix";
  const nextToSelector = `#summary`;

  await page.fill(hostNameSelector, "joomladb");
  await page.fill(usernameSelector, "root");
  await page.fill(passwordSelector, "joomlapass");
  await page.fill(databaseNameSelector, "joomladb");
  await page.fill(tablePrefixSelector, "sagar_");
  await page.locator(nextToSelector).click();
});

When("the admin finishes the installation", async function () {
  const installSelector = '//div[@class="row-fluid"]//a[@title="Install"]';
  await page.locator(installSelector).click();
});

Then("the installation should be completed", async function () {
  const succesAlertSelector = '//div[@class= "alert alert-success"]/h3';
  const removeInstallationFolderSlector =
    '//input[@onclick= "Install.removeFolder(this);"]';
  const successInstallationMessage = await page
    .locator(succesAlertSelector)
    .innerText();
  if (
    successInstallationMessage !== "Congratulations! Joomla! is now installed."
  ) {
    throw new Error("Joomla installation Failed");
  }
  await page.locator(removeInstallationFolderSlector).click();
});
