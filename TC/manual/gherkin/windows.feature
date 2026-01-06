Feature: Windows - Navigating to New Window
  As a Senior QA Automation Engineer, 
  I want to validate the flow of opening a new window to ensure the destination content is correct.

@regression
  Scenario: TC-WIN-001 - Clicking "Click Here" and validating text in New Window
  Given the user navigates to "/windows"
  When the user clicks "Click Here,"
  the user should see the text "New Window" on the destination page.