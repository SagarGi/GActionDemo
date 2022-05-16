/**
 * Function to check whether an element is visible or not
 * @param {string} selectorValue - Selector which is used to locate the element
 * @return {boolean} returns true if the element is visible
 */
async function getVisibility(selectorValue, page = global.page) {
  const locatorValue = await page.locator(selectorValue);
  const visibility = await locatorValue.isVisible();

  return visibility;
}

/**
 * Function to find out all the inner-texts from an element
 * @param {string} selectorValue - Selector which is used to locate the element
 * @return {string} returns the inner-texts of the element
 */
async function getInnerText(selectorValue, page = global.page) {
  const locatorValue = await page.locator(selectorValue);
  const innerText = await locatorValue.innerText();

  return innerText;
}

/**
 * Function to remove all white-spaces from a string
 * @param {string} inputString - Input string that is to be formatted
 * @return {string} returns the formatted string
 */
function getAlphaNumeric(inputString) {
  let newString = inputString.replace(/\W/g, ""); // /W selects any non-aplhnumeric values
  return newString;
}

/**
 * Function to automate click on an element
 * @param {string} selectorValue - Selector which is used to locate the element
 */
async function clickOnElement(selectorValue, page = global.page) {
  const locatorValue = await page.locator(selectorValue);
  await locatorValue.click();
}

module.exports = {
  getVisibility,
  getInnerText,
  getAlphaNumeric,
  clickOnElement,
};
