Feature: Status

  Scenario: Detect status
    When I am on the Home page for the first time
    Then I should see the status "Free"

  Scenario: Detect status change (Offline)
    Given I am on the Home page
    When I click on the status switch
    Then I should see the status "Offline"

  Scenario: Detect status change (Busy)
    Given I am on the Home page
    And I have orders available
    When I accept an order
    Then I should see the status "Busy"

  Scenario: Block status change when Busy
    Given I am on the Home page
    And I have orders available
    When I accept an order
    And I click on the status switch
    Then I should see the status "Busy"