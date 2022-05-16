const { Given, When, Then } = require("@cucumber/cucumber");

const assert = require("assert");
const HomePage = require("../pageObjects/HomePage.js");
const DropboxJoomlaHomePage = require("../pageObjects/DropboxJoomlaHomePage.js");
const homePage = new HomePage();
const dropboxJoomlaHomePage = new DropboxJoomlaHomePage();
// const pathForZipFile = PATH_FOR_FILES + "com_dropbox4.0.5.zip";
const pathForZipFile =
  process.env.PWD + "/filesForUplaod/com_dropbox4.0.5.zip";

Given("the dropbox extension {string} installed", async function (observed) {
  await homePage.clickOnComponentsSection();

  // check if Dropbox option is visible or not
  let isVisible = await getVisibility(homePage.dropboxComponentSelector);
  let boolVal = undefined;
  if (observed === "is") {
    boolVal = true;
  } else if (observed === "is not") {
    boolVal = false;
  }
  assert.equal(isVisible, boolVal);
});

When("the user goes to the Install Extension page", async function () {
  await homePage.clickOnExtensionsSection();
  await homePage.clickOnExtensionsSection(); // it is requiring two clicks sometimes
  await homePage.clickOnManageSection();

  // check if the `Extensions [Manage]` page is the current page
  let headingText = await getInnerText(homePage.titleSelector);
  let pageTitle = getAlphaNumeric(homePage.staticValues.extensionManageHeading);
  headingText = getAlphaNumeric(headingText);
  console.log(headingText);
  console.log(pageTitle);
  //   assert(headingText == pageTitle);

  // check if the install option is visible
  const isInstallOptionVisible = await getVisibility(
    homePage.manageExtensionPage.installSelector
  );
  assert.equal(isInstallOptionVisible, true);

  // click on install
  await homePage.clickOnInstallExtension();

  //check if the `Extensions [Install]` page is the current page
  let headingTextInstallPage = await getInnerText(homePage.titleSelector);
  let pageTitleInstallPage = getAlphaNumeric(
    homePage.staticValues.extensionInstallHeading
  );
  headingTextInstallPage = getAlphaNumeric(headingTextInstallPage);
  assert.equal(headingTextInstallPage, pageTitleInstallPage);
});

When("the user clicks on the Dropbox option", async function () {
  await homePage.clickOnDropboxSection();
});

When("the user uploads the Dropbox extension zip file", async function () {
  await homePage.uploadExtensionFile(pathForZipFile);
});

Then("the user should see the Upload section", async function () {
  let isVisible;
  isVisible = await getVisibility(
    homePage.manageExtensionPage.uploadFieldSelector
  );

  // sometimes, a different page appears. So, if the upload section isn't visible, try clicking on this option first
  if (!isVisible) {
    await clickOnElement(homePage.manageExtensionPage.uploadMenuSelector);
    isVisible = await getVisibility(
      homePage.manageExtensionPage.uploadFieldSelector
    );
  }

  assert.equal(isVisible, true);
});

Then("the user should be on the Dropbox page", async function () {
  let headingText = await getInnerText(dropboxJoomlaHomePage.titleSelector);
  let pageTitle = getAlphaNumeric(
    dropboxJoomlaHomePage.staticValues.homeHeading
  );
  headingText = getAlphaNumeric(headingText);

  assert.equal(headingText, pageTitle);
});
