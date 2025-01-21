class SettingsPage {
  
    constructor() {
      this.settingsLink = '';
      this.radiologySubmodule = '';
      this.addImagingTypeButton = '';
      this.imagingItemNameField = '';
      this.addButton = '';
      this.searchBar = '';
    }
  
    /**
     * @Test12 This method automates the process of creating a new imaging type in the Radiology section of the Settings module.
     *
     * @description This function performs the following actions:
     *              1. Navigates to the Settings module and clicks on the Radiology submodule.
     *              2. Clicks on the "Add Imaging Type" button to open the modal for adding a new imaging type.
     *              3. Fills the "Imaging Item Name" field with a random name (Test-{random4digitnumber}) and clicks "Add".
     *              4. Verifies that the newly added imaging type appears in the list of imaging types.
     */
    addAndVerifyNewImagingType() {
      // write your logic here
    }
  }
  
  export default SettingsPage;