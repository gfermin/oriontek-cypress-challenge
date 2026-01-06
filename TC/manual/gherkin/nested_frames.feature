Feature: Nested Frames - Reading Text in iframes
  As a Senior QA Automation Engineer, I want to read the text from nested frames 
  to validate that the content is rendered correctly in each frame.

@regression
Scenario: TC-FR-001 - Print the text from different iframes
  Given the user navigates to "/nested_frames"
  When the user retrieves the text from the frame "frame-top > frame-left"
  And the user retrieves the text from the frame "frame-top > frame-middle"
  And the user retrieves the text from the frame "frame-top > frame-right"
  And the user retrieves the text from the frame "frame-bottom"
  Then all retrieved text should be non-empty.
