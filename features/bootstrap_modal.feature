Feature: Bootstrap Modal Functionality

  Scenario: Single Modal
    Given user navigates to the Bootstrap modal page
    When user clicks on "Launch modal" 
    Then a modal should appear with the text "This is the place where the content for the modal dialog displays"
    When user clicks on "close" button
    Then the modal should disappear and the page should reload

  Scenario: Nested Modal
    Given user navigates to the Bootstrap modal page(Nested)
    When user clicks on "Launch modal" button(Nested)
    Then a modal should appear(Nested)
    When user clicks on the nested "Launch modal" button inside the modal(Nested)
    Then a nested modal should appear with different content "This is the place where the content for the modal dialog displays"(Nested)
    When user clicks on "Save changes" button inside the nested modal(Nested)
    Then all modals should disappear and the page should reload(Nested)
