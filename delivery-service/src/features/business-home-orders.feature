Feature: Business Orders

  Scenario: Without orders
    Given I am on the OrdersBusiness page without orders
    Then the number of total orders should be equal to 0
    And the number of ongoing orders should be equal to 0

  Scenario: With orders
    Given I am on the OrdersBusiness page with orders
    Then the number of total orders should be different than 0

  Scenario: Click ready on first order
    Given I am on the OrdersBusiness page with orders
    When I click on the ready button of the first order
    Then I should be notified with the message "Order is ready!"



