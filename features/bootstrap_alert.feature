Feature: Bootstrap Alerts

  Scenario: Verify Alert Messages
    Given I am on the Bootstrap Alerts page
    When I click on all alert buttons
    Then all alerts should appear with the correct messages
    Then I close alerts using the cancel button
