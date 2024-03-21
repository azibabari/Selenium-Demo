Feature: Select Dropdown Lists Functionality
  As a user,
  I want to verify that I can select each day of the week in the single select section,
  So that the value should be shown below the select field.

  Scenario: Verify selection of each day of the week
    Given the user is on the Select Dropdown Lists page
    When the user accesses the Select Dropdown lists
    And navigates to the single select section
    And selects all the days of the week one by one
    Then for any day user selects, value should be shown below the select field
    
  Scenario: Verify functionality of multi-select (Multiple Select)
    Given the user is on the Select Dropdown Lists page
    When the user navigates to the multiple select section

    # Selecting one option
    When the user selects any city
    When the user clicks on the "First selected" button
    Then the first selected option should be displayed under the field(one option)
    When the user clicks on "Get all selected"(one option)
    Then all selected cities should be displayed(one option) 

    # Selecting multiple options
    When the user selects multiple cities 
    When the user clicks on the "First selected" button
    Then the first selected option should be displayed under the field
    When the user clicks on "Get all selected" 
    Then all selected cities should be displayed 