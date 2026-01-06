Feature: TinyMCE - Text Editing and Formatting
  As a Senior Automation QA Engineer, I want to validate the TinyMCE editor
  To ensure it allows editing, formatting, and extracting final text.

@smoke @regression
  Scenario: TC-TMCE-001 - Delete, Write Bold, Center, Change to Red, and Return Text as a String
  Given: The user navigates to "/tinymce"
  And the user deletes the editor's contents
  When the user writes dynamic bold text using the current date and time
  And the user centers the text
  And the user changes the text color to red
  Then the user retrieves the final text from the editor as a string
  And the returned string must contain the current date and time

@regression
  Scenario: TC-TMCE-002 - Empty Editor Without Crashing
  Given: The user navigates to "/tinymce"
  When the user deletes the editor's contents
  And the user does not write any text
  Then the editor must remain empty
  And the page must not crash