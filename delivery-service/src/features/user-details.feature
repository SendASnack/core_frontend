Feature: User Details


  Scenario: Detect status change (Offline)
    Given I am on the HomeRider page
    When I click on the status switch
    Then I should be notified with the message "Status changed successfully"

  Scenario: Detect status change (Busy)
    Given I am on the HomeRider page with an order ongoing
    Then I should see the status "Busy"

  Scenario: Block status change when Busy
    Given I am on the HomeRider page with an order ongoing
    When I click on the status switch
    Then I shouldn't be notified