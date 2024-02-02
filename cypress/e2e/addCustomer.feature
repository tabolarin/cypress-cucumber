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
    And I click add customer button
    And I select the customers tab
    Then Then customer information will be listed


  Scenario Outline: Add multiple bank customers
    Given I navigate to the login page
    When I click on bank manager login
    And I click on add customer
    And I enter customer information
      | Key       | Value       |
      | FirstName | <firstName> |
      | LastName  | <lastName>  |
      | Postcode  | <postcode>  |
    And I click add customer button
    And I click on open account
    And I select customer name <customerName>
    And I select currency <currency>
    And I click the process button
    Then The alert popup will be displayed
    Examples:
      | firstName | lastName | customerName     | postcode | currency |
      | Danielle  | Steel   | "Danielle Steel" | NW4 5RT  | "Pound"  |




 #scenario outline tests - open multiple accounts