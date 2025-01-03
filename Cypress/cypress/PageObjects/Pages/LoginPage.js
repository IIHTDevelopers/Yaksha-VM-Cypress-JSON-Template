class LoginPage {
  user = "";
  pass = "";
  signIn = "";
  errorMsg = "";
  admin = "";
  logout = "";

  /**
   * @Test1 This method logs in the user with valid credentials.
   *
   * @description This method performs the login operation using the provided valid credentials. It highlights the input
   *              fields for better visibility during interaction and fills the username and password fields. After submitting
   *              the login form by clicking the login button, it validates the success of the login process. The login is
   *              considered successful if there are no errors.
   */
  performLogin() {
    // write your logic here
  }

 /**
   * @Test16 Performs login with invalid credentials and validates error message.
   *
   * @description This method navigates to the login page, logs out if a session is active, and attempts to log in using 
   *              invalid credentials retrieved from the test data. After entering the invalid username and password, it 
   *              asserts that the appropriate error message is displayed, ensuring proper handling of invalid login attempts.
   * @returns {void} - This method does not return a value but performs assertions to validate the test.
   */
  performLoginWithInvalidCredentials() {
    // write your logic here
  }

}

export default LoginPage;
