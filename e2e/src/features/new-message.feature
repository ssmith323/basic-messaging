Feature: New Message
  As a user
  I want to post a new Message
  So that I can share ideas

  Background: Setup
    Given I am on the landing page

  Scenario: Create Message
    When I enter "Hello World!"
    And click "Submit"
    Then I should be taken to the confirmation page

  Scenario: Create Message
    When I enter ""
    And click "Submit"
    Then I should see an error message
