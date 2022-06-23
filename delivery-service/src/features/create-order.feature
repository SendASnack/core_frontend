Feature: Create order

  Scenario: Without filling all fields
    Given a rendered create-order-form
    When I click on the submit button
    Then I should be notified with the message "Please fill in all fields!"