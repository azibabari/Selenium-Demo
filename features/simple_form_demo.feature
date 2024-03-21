Feature: Simple Form Demo
  As a user
  I want to verify successful submission of text in the single input field

  Scenario: Verify successful submission of text
    Given the user is on the Simple Form Demo page
    When the user inputs "Azibabari" in the textfield
    And the user clicks the "Show Message" button
    Then "Azibabari" should display below the input field

  Scenario Outline: Verify successful submission of numbers and decimals in multiple input fields
    Given the user is on the Simple Form Demo page (Multiple Fields section)
    When the user enters "<first_number>" in the first field
    And the user enters "<second_number>" in the second field
    And the user clicks the "Get Total" button
    Then the total displayed should be "<expected_sum>"
    Examples:
      | first_number | second_number | expected_sum |
      | 5             | 5              | 10            |
      | 5.2           | 5.2            | 10.4          |
      | 5             | 5.2            | 10.2          |