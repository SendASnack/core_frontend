Feature: Home Orders

  Scenario: Accept order
    Given a rendered order panel
    When I click on the accept button
    Then the order should be accepted
    And I should be notified with the message "Accepting order..."

  Scenario: Decline order
    Given a rendered order panel
    When I click on the decline button
    Then the order should be declined
    And I should be notified with the message "Declining order..."
