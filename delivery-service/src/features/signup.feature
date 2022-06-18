Feature: Sign Up

  Scenario: Detect the submit action
    Given I am on the Sign Up page
    When I click the submit button
    Then I should be notified

  Scenario: Submit with invalid username
    Given I am on the Sign Up page
    When I enter the username "2"
    And I click the submit button
    Then I should be notified with the message "Please provide a valid username!"

  Scenario: Submit with invalid email
    Given I am on the Sign Up page
    When I enter the username "Daniela"
    And I enter the email "abc"
    And I click the submit button
    Then I should be notified with the message "Please provide a valid email!"

  Scenario: Submit with invalid password (strength)
    Given I am on the Sign Up page
    When I enter the username "Daniela"
    And I enter the email "ddias@ua.pt"
    And I enter the password "123"
    And I click the submit button
    Then I should be notified with the message "Please provide an password, it must have 4 characters and at least one number and one letter!"

  Scenario: Submit with invalid password (confirm password doesn't match)
    Given I am on the Sign Up page
    When I enter the username "Daniela"
    And I enter the email "ddias@ua.pt"
    And I enter the password "Password1"
    And I confirm the password with "Password"
    And I click the submit button
    Then I should be notified with the message "Please provide an password, it must have 4 characters and at least one number and one letter!"

  Scenario: Submit successfully
    Given I am on the Sign Up page
    When I enter the name "Daniela"
    And I enter the username "Daniela"
    And I enter the email "ddias@ua.pt"
    And I enter the phone number 912345678
    And I enter the password "Password12"
    And I confirm the password with "Password12"
    And I click the submit button
    Then I should be in the Login page


