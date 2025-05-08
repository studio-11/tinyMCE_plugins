@editor @editor_atto @atto @atto_helloworld
Feature: Atto helloworld button
  To format text in Atto, I need to insert Hello World

  @javascript
  Scenario: Insert Hello World
    Given I log in as "admin"
    And I open my profile in edit mode
    And I set the field "Description" to "<p>Some text</p>"
    And I select the text in the "Description" Atto editor
    When I click on "Hello World" "button" in the "Description" "form_row"
    Then the field "Description" matches value "Hello World!"