Feature: Add a bank customer
  As a User I want to add a new bank customer

  Scenario: Add a new bank customer
    Given I navigate to the login page
    When I click on bank manager login
    And I click on add customer
    And I enter customer information
      | Key       | Value   |
      | FirstName | Vivica  |
      | LastName  | Fox     |
      | Postcode  | NW1 4ER |
    And I click add customer
    And I select the customers tab
    Then Then customer information will be listed