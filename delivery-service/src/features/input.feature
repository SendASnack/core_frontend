Feature: Input

  Scenario: Update value on change
    Given a rendered input
    When the input value changes to "Hello"
    Then the input value should be updated to "Hello"
    And the on_value_changed callback should be called with "Hello"
