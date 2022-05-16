class DropboxJoomlaHomePage {
  constructor() {
    this.staticValues = {
      heading: "Dropbox: [New]",
      homeHeading: "Dropbox Manager",
    };
    this.titleSelector = "//h1[@class='page-title']";
    this.toolbar = {
      newBtn: "#toolbar-new button",
      editBtn: "#toolbar-edit button",
      deleteBtn: "#toolbar-delete button",
      options: "#toolbar-options button",
    };
    this.editPage = {
      tokenFieldSelector: "#jform_dropbox_secret",
      folderNameSelector: "#jform_folder",
      saveAndCloseBtnSelector: "#toolbar-save button",
      connectBtnSelector: "#toolbar-arrow-right-4 button",
      formTitleSelector: "//h1[@class='page-title']/small",
      saveBtnSelector: "//div[@id='toolbar-apply']/button",
    };

    this.boxes = {
      rowSelectorByName: "//a[contains(text(), '%s')]/ancestor::tr",
      connectionSelector: "/td[contains(text(),'Connected')]", // this is to be appended after the row selection
      previewSelector: "//span/parent::a",
    };

    this.folderSelectorByName = "//a[contains(text(),'%s')]";
  }

  // click on `New` button
  async clickOnNewBtn() {
    await clickOnElement(this.toolbar.newBtn);
  }

  // click on `Edit` button
  async clickOnEditBtn() {
    await clickOnElement(this.toolbar.editBtn);
  }

  // click on `Delete` button
  async clickOnDelteBtn() {
    await clickOnElement(this.toolbar.deleteBtn);
  }

  // click on `Options` button
  async clickOnOptionsBtn() {
    await clickOnElement(this.toolbar.options);
  }

  /**
   * Function to fill 'folder name' in the folder field
   * @param {string} folderName - Name of the folder
   */
  async fillFolderNameField(folderName) {
    await page.fill(this.editPage.folderNameSelector, folderName);
  }

  // click on `Save & Close` button
  async clickOnSaveAndClose() {
    await clickOnElement(this.editPage.saveAndCloseBtnSelector);
  }

  // click on `Save` button
  async clickOnSaveBtn() {
    await clickOnElement(this.editPage.saveBtnSelector);
  }

  // click on `Connect` button
  async clickOnConnectBtn() {
    await clickOnElement(this.editPage.connectBtnSelector);
  }

  /**
   * Function to get the selector for an entire row using the folder name
   * @param {string} folderName - Name of folder
   * @return {string} Selector value for the row containing folder name
   */
  getRowSelectorByFolderName(folderName) {
    const selectorValue = format(this.boxes.rowSelectorByName, folderName);
    return selectorValue;
  }

  /**
   * Function to check the connection status of the folder (whether it is connected to dropbox account or not)
   * @param {string} folderName - Name of the folder for which we want to check the connection
   * @return {string} Connection status
   */
  async getConnectionStatusForFolder(folderName) {
    const rowSelector = this.getRowSelectorByFolderName(folderName);
    const connectionStatusSelector =
      rowSelector + this.boxes.connectionSelector;

    const status = await getInnerText(connectionStatusSelector);
    return status;
  }

  /**
   * Function to check the visibility of preview button for a particular folder
   * @param {string} folderName - Name of the folder
   * @return {boolean} Returns visibility of the preview button
   */
  async checkPreviewBtnVisibility(folderName) {
    const rowSelector = this.getRowSelectorByFolderName(folderName);
    const previewBtnSelector = rowSelector + this.boxes.previewSelector;
    const visibility = await getVisibility(previewBtnSelector);

    return visibility;
  }
}

module.exports = DropboxJoomlaHomePage;
