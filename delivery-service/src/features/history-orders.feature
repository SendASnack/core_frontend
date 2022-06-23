Feature: Orders History

  Scenario: Without orders
    Given I am on the OrdersRide page without orders
    Then I should see the text "No results found."
    And the number of total orders should be equal to 0
    And the number of ongoing orders should be equal to 0

  Scenario: With orders
    Given I am on the OrdersRide page with orders
    Then the number of total orders should be different than 0

  Scenario: Filter by date (without results)
    Given I am on the OrdersRide page with orders
    When I click on the date filter
    And I enter the date "2018-05-01"
    Then I should be notified with the message "No results found."