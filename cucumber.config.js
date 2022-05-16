const {
  Before,
  BeforeAll,
  AfterAll,
  After,
  setDefaultTimeout,
} = require("@cucumber/cucumber");
const { chromium } = require("playwright");
const { expect } = require("@playwright/test");
const util = require("util");
const {
  getVisibility,
  getInnerText,
  getAlphaNumeric,
  clickOnElement,
} = require("./utils.js");

global.expect = expect;
setDefaultTimeout(1000 * 1000);

BeforeAll(async function () {
  global.browser = await chromium.launch({
    slowMo: 1000,
    channel: "chrome",
  });
});

AfterAll(async function () {
  await global.browser.close();
});

Before(async function () {
  global.context = await global.browser.newContext();
  global.page = await global.context.newPage();
});

After(async function () {
  await global.page.close();
  await global.context.close();
});

global.format = util.format;
global.getInnerText = getInnerText;
global.getVisibility = getVisibility;
global.clickOnElement = clickOnElement;
global.getAlphaNumeric = getAlphaNumeric;
