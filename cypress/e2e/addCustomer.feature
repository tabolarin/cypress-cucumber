Feature: Add a bank customer
  As a User I want to add a new bank customer

  Scenario: Add a new bank customer
    Given I navigate to the login page
    When I click on bank manager login
    And I click on add customer
    And I enter first name "Vivica"