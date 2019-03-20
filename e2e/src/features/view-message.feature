Feature: View Messages
  As a user
  I want to view Messages
  So that I can see what was posted

  Scenario Outline: View Messages
    Given I successfully entered "<message>"
    When I am on the landing page
    Then "<message>" should display
    Examples:
      | message    |
      | Value 1    |
      | To Display |
