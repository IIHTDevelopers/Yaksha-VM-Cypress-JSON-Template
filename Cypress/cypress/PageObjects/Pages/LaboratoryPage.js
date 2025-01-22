class LaboratoryPage {

  constructor() {
    this.laboratoryLinkXPath = '';
    this.laboratoryDashboardXPath = '';
    this.settingsSubModuleXPath = '';
    this.addNewLabTestXPath = '';
    this.addButtonXPath = '';
    this.closeButtonXPath = '';
    this.starIconXPath = '';
  }

  /**
   * @Test5
   * @Description This method verifies the error message when attempting to add a new lab test without entering required values.
   * Navigates to Laboratory > Settings, selects "Add New Lab Test," and clicks the Add button without providing any input.
   * Captures and returns the displayed error message.
   */
  verifyErrorMessage() {
    // write your logic here
  }

  /**
   * @Test11 This method verifies the tooltip text of the star icon in the laboratory dashboard.
   * @description This function navigates to the laboratory page and dashboard, hovers over the star icon, and
   *              waits for the tooltip to appear. It verifies the visibility of the star icon and retrieves the tooltip
   *              text. 
   */
  verifyStarTooltip() {
    // write your logic here
  }

}

export default LaboratoryPage;
