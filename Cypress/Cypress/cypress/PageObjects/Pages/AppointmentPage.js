class AppointmentPage {
  titleName = "";
  counters = "";
  appointment = ``;
  selectCounter = "";
  patientName = "";
  searchBar = "";
  searchResultPatientName = "";
  hospitalSearchBar = "";
  patientCode = "";
  newVisitTab = ``;
  newVisitHeading = ``;

  /**
   * @Test2
   * @description This method searches for patients by their name and verifies that the search results
   *              accurately match the expected patient names. It ensures that the displayed patient name 
   *              in the search results corresponds to the searched name, confirming the search functionality 
   *              operates correctly
   */
  searchAndVerifypatientName() {
    // write your logic here
  }

  /**
   * @Test9.1
   * @description Initiates the patient search process in the appointment section.
   *              It creates an instance of the `PatientSearchHelper` class in support folder, clicks on the
   *              appointment dropdown, selects a counter, and then calls the `searchPatient()`
   *              method from the helper to perform the actual search.
   * @returns {void}
   */
  searchPatientInAppointment() {
    // write your logic here
  }
}

export default AppointmentPage;
